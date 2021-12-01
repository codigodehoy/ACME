import {getEmployeesTime, employeeSchedule} from "./src/controller/employeeSchedule.controller.mjs"
// const {getEmployeesTime, employeeSchedule} = require("./src/controller/employeeSchedule.controller.js");

for (let i = 0; i < employeeSchedule.length; i++) {
  for (let j = i+1; j < employeeSchedule.length ; j++) {
    getEmployeesTime(i,j); 
  }
}

