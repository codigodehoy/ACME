import { employeeSchedule } from "../employeeSchedule.controller.mjs"
// const { add }  = require("../employeeSchedule.controller.mjs");

describe('', () => {
  test('Adding two numbers', async () => {
    const employee = [
      {
        name: 'DAVID',
        schedules: [
          [ 'MO', 21.5, 24 ],
          [ 'TU', 10, 12 ],
          [ 'TH', 1, 13 ],
          [ 'SA', 14, 18 ],
          [ 'SU', 20, 21 ]
        ]
      },
      
      {
        name: 'ANTONIO',
        schedules: [ [ 'MO', 22.76, 23.2 ], [ 'TH', 12, 14 ], [ 'SU', 20, 21 ] ]
      } 
    ]

    expect(employeeSchedule()).toEqual(employee)
  
  })
  
})

