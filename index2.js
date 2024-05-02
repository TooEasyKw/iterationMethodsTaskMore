// You are given an array representing a series of financial records for a freelance worker.
// Each record is an array containing the record type ("income", "expense", "investment", or "refund") and the amount.
const financialRecords = [
  ["income", 1800],
  ["expense", 500],
  ["investment", 1000],
  ["income", 2400],
  ["refund", 200],
  ["expense", 800],
  ["income", 1500],
];

/*****************************************************************
Part 1: Record Categorization

Task 1) Create a new array containing only "income" and "refund" records.
       Output 1) [["income", 1800], ["income", 2400], ["refund", 200], ["income", 1500]]

Task 2) Create a new array containing only "expense" and "investment" records.
       Output 2) [["expense", 500], ["investment", 1000], ["expense", 800]]

******************************************************************/

/*****************************************************************
Part 2: Financial Calculations

Task 3) Calculate the total for "income" and "refund" records combined.
       Output 3) 5900

Task 4) Calculate the total for "expense" and "investment" records combined.
       Output 4) 2300

******************************************************************/

/*****************************************************************
Part 3: Detailed Analysis

Task 5) Determine the net financial impact (total for "income" and "refund" - total for "expense" and "investment").
       Output 5) 3600

Task 6) Identify and create a new array with records where the amount is greater than $800.
       Output 6) [["income", 1800], ["investment", 1000], ["income", 2400], ["income", 1500]]

******************************************************************/

// Use JavaScript array methods like filter and reduce to achieve the desired outputs for each task.

const Result = financialRecords.filter((record) => {
  if (record[0] == "income" || record[0] == "refund") {
    return true;
  }
});
console.log("Task 1) ", Result);

const Result1 = financialRecords.filter((record) => {
  if (record[0] == "expense" || record[0] == "investment") {
    return true;
  }
});
console.log("Task 2) ", Result1);

const Result3 = financialRecords.reduce((total, record) => {
  if (record[0] == "income" || record[0] == "refund") {
    return total + record[1];
  }
  return total;
}, 0);
console.log("Task 3) " + Result3);

const Result4 = financialRecords.reduce((total, record) => {
  if (record[0] == "expense" || record[0] == "investment") {
    return total + record[1];
  }
  return total;
}, 0);
console.log("Task 4) " + Result4);
console.log("Task 5)", Result3 - Result4);

const Result5 = financialRecords.filter((record) => {
  return record[1] > 800;
});
console.log("Task 6) ", Result5);
