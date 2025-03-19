//UC1: Check Employee is present or absent
const Is_Absent = 0
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == Is_Absent) {
    console.log("Employee is Absent");
}
else {
    console.log("Employee is Present");
}

//UC2: Calculate Daily Employee Wage based on part time or full time work
const Is_Part_Time = 1;
const Is_Full_Time = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;

// let empHrs = 0;
// empCheck = Math.floor(Math.random() * 10) % 3;
// switch (empCheck) {
//     case Is_Part_Time:
//         empHrs = Part_Time_Hours;
//         break;
//     case Is_Full_Time:
//         empHrs = Full_Time_Hours;
//         break;
//     default:
//         empHrs = 0;
// }
// let empWage = empHrs * Wage_Per_Hour;
// console.log("Employee Wage: " + empWage);

// UC3: Refactor the code to write a function to get work hours
function GetWorkingHours(empCheck) {
    switch (empCheck) {
        case Is_Part_Time:
            return Part_Time_Hours;
        case Is_Full_Time:
            return Full_Time_Hours;
        default:
            return 0;
    }
}
let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = GetWorkingHours(empCheck);
let empWage = empHrs * Wage_Per_Hour;
console.log("Employee Wage: " + empWage);

//UC4: Calculate total wage for a month assuming 20 working days in a month
const Num_Of_Working_Days = 2;
let totalEmpHrs = 0;
for (let day = 0; day < Num_Of_Working_Days; day++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += GetWorkingHours(empCheck);
}
let totalEmpWage = totalEmpHrs * Wage_Per_Hour;
console.log("Total Employee Wage: " + totalEmpWage);

//UC5: Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
const Max_Hrs_In_Month = 100;
const Max_Working_Days = 10;
let totalEmpHrs1 = 0;
let totalWorkingDays = 0;
while (totalEmpHrs1 < Max_Hrs_In_Month && totalWorkingDays < Max_Working_Days) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs1 += GetWorkingHours(empCheck);
}
let totalEmpWage1 = totalEmpHrs1 * Wage_Per_Hour;
console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs1 + " Employee Wage: " + totalEmpWage1);