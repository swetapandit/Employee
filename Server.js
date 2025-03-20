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

//UC6: Store the daily wage along with the total wage
function calcDailyWage(empHrs) {
    return empHrs * Wage_Per_Hour;
}
const Max_Hrs_In_Month1 = 160;
const Max_Working_Days1 = 20;
let totalEmpHrs2 = 0;
let totalWorkingDays1 = 0;
let empDailyWageArr = new Array();
while (totalEmpHrs2 < Max_Hrs_In_Month1 && totalWorkingDays1 < Max_Working_Days1) {
    totalWorkingDays1++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = GetWorkingHours(empCheck);
    totalEmpHrs2 += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage1 = calcDailyWage(totalEmpHrs2);
console.log("Total Days: " + totalWorkingDays1 + " Total Hrs: " + totalEmpHrs2 + " Employee Wage: " + empWage1);

// UC7: Use the daily wage array to perform the operations using helper functions

//UC 7A: Calculate total wage using Array forEach traversal or reduce method

let totalEmpWage2 = 0;
function sum(dailyWage) {
    totalEmpWage2 += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays1 + " Total Hrs: " + totalEmpHrs2 + " Employee Wage: " + totalEmpWage2);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Employee Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC 7B: Show the day along with daily wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}   
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C: Show Days when Full time wage of 160 were earned using filter function
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC 7D: Find the first occurrence when Full Time Wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFullTimeWage));

//UC 7E: Check if Every Element of Full Time Wage is truly holding Full time wage

function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E - Check All Elements have Full Time Wage: " + fullDayWageArr.every(isAllFullTimeWage));

//UC 7F: Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F - Check if Any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G: Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC7G - Number of Days Employee Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));


//UC8: Store the Day, Hours Worked and Wage Earned in a single object
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs3 = 0;
let totalWorkingDays2 = 0;
let empDailyWageArr1 = new Array();
let empDailyWageMap = new Map();

function calcDailyWage1(empHrs) {
    return empHrs * Wage_Per_Hour;
}

while (totalEmpHrs3 < MAX_HRS_IN_MONTH && totalWorkingDays2 < NUM_OF_WORKING_DAYS) {
    totalWorkingDays2++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = GetWorkingHours(empCheck);
    totalEmpHrs3 += empHrs;
    empDailyWageArr1.push(calcDailyWage1(empHrs));
    empDailyWageMap.set(totalWorkingDays2, calcDailyWage1(empHrs));
}
console.log(empDailyWageMap);
function totalWages1(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC8 - Employee Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages1, 0));



// UC9: Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyWageMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr1.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A - Emp Wage with Arrow: " + " Total Hours: " + totalHours + " Total Wages: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyWageMap.forEach((value, key) => {
    if (value == 0) nonWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else fullWorkingDays.push(key);
});
console.log("Non Working Days: " + nonWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Full Working Days: " + fullWorkingDays);
