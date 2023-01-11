const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0,2)

}
// console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))


const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2)

}
// console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

// - create an array of two callback functions
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]


function createFareMultiplier(num) {
  return (fare) => {
    return num * fare
  }
}
// better way to write the above
// const fare10Multiplier = createFareMultiplier(10)
// console.log(createFareMultiplier(10.0)(4))

const fareDoubler = createFareMultiplier(2)
// console.log(fareDoubler(10.0))
const fareTripler = createFareMultiplier(3)
// console.log(fareTripler(10.0))

const selectDifferentDrivers = function(drivers, func) {
  return func(drivers)
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
