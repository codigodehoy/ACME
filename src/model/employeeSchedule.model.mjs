import { readFile } from 'fs/promises'

let dataFile = await readFile(new URL('data.txt', import.meta.url), 'utf-8')
  
const rowsFile = dataFile.split('\n')

if(rowsFile.length < 5 ){
  throw ('This file should be at least five sets of data')  
}
  
const divideEmployeeSchedule = rowsFile.map((rowFile) => rowFile.split('='))


// Return an array with day, checkin and checkout 
const divideSchedules = (schedules) => {
  return schedules.map((element) => {
    const day = element.substring(0 ,2);
    const schedules = element.substr(2);
    const cadena = schedules.split('-');
    let [horaEntrada, horaSalida] = cadena;
    const [checkIn, checkOut] = convertTimeFloat(horaEntrada, horaSalida);
    return [day, checkIn, checkOut];
  })
}

// Parse minutes of an hour to float
function convertTimeFloat(horaEntrada, horaSalida){
  const $timeIn = new Date(`2021-01-26, ${horaEntrada}`);    
  const $timeOut = new Date(`2021-01-26, ${horaSalida}`);
  let timeIn = $timeIn.getHours();
  let timeOut = $timeOut.getHours();
  (timeOut == 0) && (timeOut = 24);
  const checkIn = parseFloat(timeIn + "." + (($timeIn.getMinutes()*100)/60));
  const checkOut = parseFloat(timeOut + "." + (($timeOut.getMinutes()*100)/60));
  return [checkIn, checkOut];
}

// Return an array with a object of employee
export const getEmployeeSchedule = () => {
  let array = []
  divideEmployeeSchedule.forEach((element) => {
    let employee = element[0]
    let schedules = element[1].replace(/\s+/g, '').split(',')
    array.push({
      name: employee,
      schedules: divideSchedules(schedules)
    })
  })
  return array;
}



