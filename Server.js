//UC1: Check Employee is present or absent
const Is_Absent = 0
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == Is_Absent) {
    console.log("Employee is Absent");
}
else {
    console.log("Employee is Present");
}