const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2)  
}
const returnLastTwoDrivers = function() {
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplyValue) {
    return function(fare) {
        return multiplyValue * fare 
    }
}
const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, select) {
    if (select === returnFirstTwoDrivers) {
        return drivers.slice(0,2)
    }
        else if (select === returnLastTwoDrivers) {
            return drivers.slice(2)
        }
}

