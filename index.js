/* Your Code Here */
let createEmployeeRecord = function(array){
    let employeeRecord = {
        firstName: array[0],
        familyName: array[1], 
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
};

let createEmployeeRecords = function(arrays){
    let eRecords = arrays.map(e => createEmployeeRecord(e))
    return eRecords
};

let createTimeInEvent = function(dateEvent){
    let date = dateEvent.split(" ")[0]
    let hour = parseInt(dateEvent.split(" ")[1])

    let event = {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    this.timeInEvents.push(event)
    return this
}

let createTimeOutEvent = function(dateEvent){
    let date = dateEvent.split(" ")[0]
    let hour = parseInt(dateEvent.split(" ")[1])

    let event = {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    this.timeOutEvents.push(event)
    return this
}

let hoursWorkedOnDate = function(desiredDate){
    let timeInHours = this.timeInEvents.find(x=> x.date === desiredDate).hour
    let timeOutHours = this.timeOutEvents.find(x=> x.date === desiredDate).hour

    let totalHours = (timeOutHours - timeInHours) / 100

    return totalHours
}

let wagesEarnedOnDate = function(date){
    let hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

let findEmployeeByFirstName = function(array, name){
    return array.find(x=> x.firstName = name)
}

let calculatePayroll = function(eRecords){
   return eRecords.reduce(function(a,b){

   return a + allWagesFor.call(b)
}, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}