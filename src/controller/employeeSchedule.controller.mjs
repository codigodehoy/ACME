import { getEmployeeSchedule } from "../model/employeeSchedule.model.mjs";
import colors from 'colors'

const employeeSchedule = getEmployeeSchedule();
const daysWeek = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"]


// Count the times that two employees had seen and render screem
const getEmployeesTime = (index, index2) => {
  let i = 0;
  let secondEmployee = employeeSchedule[index2].name;
  employeeSchedule[index].schedules.forEach((elem) => {
    const day = elem[0];
    daysWeek.forEach((dayWeek) => {
      if (day == dayWeek) {
        const employee = getEmployee(dayWeek, index2);
        let [timeIn, timeOut] = employee;
        if (timeIn < elem[2] && elem[1] < timeOut) {
          i++;
        }
      }
    });
  });
  (i > 0) && console.log(`${employeeSchedule[index].name}`.blue, `-`.white, `${secondEmployee}:`.magenta, `${i}`);

}

// Return an array with data of an employee
function getEmployee(weekDay, id) {
  let horaInicial = "";
  let horaFinal = "";
  let employee = "";
  let $day = "";
  employeeSchedule[id].schedules.forEach((elem) => {
    $day = elem[0];
    if ($day == weekDay) {
      employee = employeeSchedule[id].name
      horaInicial = elem[1];
      horaFinal = elem[2];
    }
  });
  return [horaInicial, horaFinal];
}


export { getEmployeesTime, employeeSchedule }


