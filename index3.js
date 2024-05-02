// You are given three arrays representing daily records for a week at a fitness center.
// Each record is an array containing the day of the week followed by numbers indicating various metrics.
// `dailyCheckIns` - day of the week, number of members checked in.
// `classAttendances` - day of the week, number of attendees in fitness classes.
// `equipmentUsages` - day of the week, number of times equipment was used.
const dailyCheckIns = [
  ["Monday", 150],
  ["Tuesday", 160],
  ["Wednesday", 120],
  ["Thursday", 140],
  ["Friday", 180],
  ["Saturday", 200],
  ["Sunday", 130],
];

const classAttendances = [
  ["Monday", 50],
  ["Tuesday", 60],
  ["Wednesday", 40],
  ["Thursday", 50],
  ["Friday", 70],
  ["Saturday", 80],
  ["Sunday", 55],
];

const equipmentUsages = [
  ["Monday", 300],
  ["Tuesday", 320],
  ["Wednesday", 250],
  ["Thursday", 280],
  ["Friday", 350],
  ["Saturday", 400],
  ["Sunday", 290],
];

/*****************************************************************
Part 1: Activity Analysis

Task 1) Create a new array containing records for days when total activity (sum of check-ins, class attendance, and equipment usage) exceeded 500.
       Output 1) [["Tuesday", 540], ["Friday", 600], ["Saturday", 680]]

Task 2) Create a new array showing only the equipment usages for days when equipment usage was at least 300.
       Output 2) [ 300, 320, 350, 400 ]

******************************************************************/

/*****************************************************************
Part 2: Weekly Summaries

Task 3) Calculate the total number of members who checked in throughout the week.
       Output 3) 1080

Task 4) Calculate the total number of class attendances throughout the week.
       Output 4) 405

******************************************************************/

/*****************************************************************
Part 3: Peak Performance

Task 5) Calculate the average number of equipment usages per day for the week.
       Output 5) 312.86 (rounded to two decimal places)

Task 6) Identify days when the number of class attendances was above the weekly average.
       Output 6) ["Tuesday", "Friday", "Saturday"]

******************************************************************/

// Use JavaScript array iteration methods such as filter, map, and reduce to achieve the desired output for each task.

const arrNew = [];
const Result = function (arr1, arr2, arr3) {
  for (let i = 0; i < arr1.length; i++) {
    arrNew.push([arr1[i][0], arr1[i][1] + arr2[i][1] + arr3[i][1]]);
  }

  return arrNew;
};

const x = Result(dailyCheckIns, classAttendances, equipmentUsages);

const Result1 = arrNew.filter((num) => {
  return num[1] > 500;
});
console.log("New Array)", arrNew);
console.log("Output 1)", Result1);

const Result2 = equipmentUsages
  .filter((record) => {
    if (record[1] >= 300) {
      return true;
    }
  })
  .map((record) => record[1]);
console.log("Output 2)", Result2);

const Result3 = dailyCheckIns.reduce((total, record) => {
  if (record[1] > 0) {
    return total + record[1];
  }
  return total;
}, 0);
console.log("Output 3) " + Result3);

const Result4 = classAttendances.reduce((total, record) => {
  if (record[1] > 0) {
    return total + record[1];
  }
  return total;
}, 0);
console.log("Output 4) " + Result4);

const Result5 = equipmentUsages.reduce((total, record) => {
  if (record[1] > 0) {
    return total + record[1];
  }
  return total;
}, 0);
console.log("Output 5) ", (Result5 / equipmentUsages.length).toFixed(2));

const Result6 = classAttendances
  .filter((record) => {
    if (record[1] >= Result4 / classAttendances.length) {
      return true;
    }
  })
  .map((record) => record[0]);
console.log("Output 6)", Result6);
