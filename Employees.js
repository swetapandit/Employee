// Constants
const IS_ABSENT = 0;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// UC1 - Check if Employee is present or absent
// Function to simulate Employee attendance
class EmployeeAttendance {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.status = this.checkAttendance();
    }

    // Function to simulate employee attendance
    checkAttendance() {
        const empCheck = Math.floor(Math.random() * 3); // Random value between 0 and 2
        switch (empCheck) {
            case IS_ABSENT:
                return 'Absent';
            case 1:
                return 'Part-Time';
            case 2:
                return 'Full-Time';
            default:
                return 'Invalid';
        }
    }
}

// Regular Expressions
const EMPLOYEE_ID_REGEX = /^EMP\d{3}$/;
const NAME_REGEX = /^[A-Za-z ]+$/;

// Function to validate Employee ID and Name
const validateEmployee = (id, name) => {
    try {
        if (!EMPLOYEE_ID_REGEX.test(id)) {
            throw new Error("Invalid Employee ID format. Use EMPXXX (e.g., EMP001)");
        }
        if (!NAME_REGEX.test(name)) {
            throw new Error("Invalid Name. Only alphabets and spaces are allowed.");
        }
    } catch (error) {
        console.error(`Error in validation: ${error.message}`);
        throw error; // Re-throw the error after logging
    }
};

// Employee Payroll Class
class EmployeePayroll {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.totalEmpHours = 0;
        this.totalWorkingDays = 0;
        this.dailyWageArray = [];
        this.dailyWageMap = new Map();
        this.dailyHoursMap = new Map();
    }

    // Function to get working hours based on attendance
    getWorkingHours(empCheck) {
        try {
            switch (empCheck) {
                case 1: return PART_TIME_HOURS;
                case 2: return FULL_TIME_HOURS;
                default: return 0;
            }
        } catch (error) {
            console.error(`Error in getting working hours: ${error.message}`);
            throw error;
        }
    }

    // Compute daily wage
    computeDailyWage(empHours) {
        try {
            return empHours * WAGE_PER_HOUR;
        } catch (error) {
            console.error(`Error in computing daily wage: ${error.message}`);
            throw error;
        }
    }

    // Calculate employee wage for the month
    calculateWage() {
        while (this.totalEmpHours <= MAX_WORKING_HOURS && this.totalWorkingDays < MAX_WORKING_DAYS) {
            try {
                this.totalWorkingDays++;
                let empCheck = Math.floor(Math.random() * 3); // 0, 1, or 2
                let empHours = this.getWorkingHours(empCheck);
                this.totalEmpHours += empHours;
                let dailyWage = this.computeDailyWage(empHours);
                this.dailyWageArray.push(dailyWage);
                this.dailyWageMap.set(this.totalWorkingDays, dailyWage);
                this.dailyHoursMap.set(this.totalWorkingDays, empHours);
            } catch (error) {
                console.error(`Error during daily wage calculation: ${error.message}`);
                break; // Break out of the loop if an error occurs
            }
        }
    }

    // Compute total salary using reduce
    computeTotalSalary() {
        try {
            return this.dailyWageArray.reduce((total, wage) => total + wage, 0);
        } catch (error) {
            console.error(`Error in calculating total salary: ${error.message}`);
        }
    }

    // Display results
    displayResults() {
        console.log("Total Working Days:", this.totalWorkingDays, " Total Hours:", this.totalEmpHours, " Total Salary:", this.computeTotalSalary());
        console.log("Daily Wage Map:", this.dailyWageMap);
        console.log("Daily Hours Map:", this.dailyHoursMap);
    }

    // Display full day wages using filter
    displayFullDayWages() {
        try {
            let fullDayWages = this.dailyWageArray.filter(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
            console.log("Full Day Wages:", fullDayWages);
        } catch (error) {
            console.error(`Error filtering full day wages: ${error.message}`);
        }
    }

    // Check if any day had full-time wage using some()
    checkFullDayWages() {
        try {
            console.log("Any Full Day Wage:", this.dailyWageArray.some(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR));
        } catch (error) {
            console.error(`Error checking for full day wage: ${error.message}`);
        }
    }

    // Check if all days have wage greater than zero using every()
    checkAllDaysHaveWage() {
        try {
            console.log("All Days Have Wage:", this.dailyWageArray.every(wage => wage > 0));
        } catch (error) {
            console.error(`Error checking if all days have wage: ${error.message}`);
        }
    }
}

// Employee Payroll Data Class
class EmployeePayrollData {
    constructor(id, name, salary, gender, startDate) {
        try {
            validateEmployee(id, name);
            this.id = id;
            this.name = name;
            this.salary = salary;
            this.gender = gender;
            this.startDate = startDate;
        } catch (error) {
            console.error(`Error in creating employee payroll data: ${error.message}`);
        }
    }

    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate}`;
    }
}

// Create and process employees
let employees = [
    new EmployeeAttendance("EMP001", "Aarushi"),
    new EmployeeAttendance("EMP002", "Rahul"),
    new EmployeeAttendance("EMP003", "Meena")
];

// Display employee attendance status
employees.forEach(emp => {
    console.log(`Employee: ${emp.name}, Status: ${emp.status}`);
});

// Create Payroll for employee
let employeePayroll = new EmployeePayroll("EMP001", "Aarushi");
employeePayroll.calculateWage();
employeePayroll.displayResults();
employeePayroll.displayFullDayWages();
employeePayroll.checkFullDayWages();
employeePayroll.checkAllDaysHaveWage();

// Creating an employee with Payroll Data
let employeeData = new EmployeePayrollData("EMP001", "Aarushi", employeePayroll.computeTotalSalary(), "F", new Date());
console.log(employeeData.toString());
