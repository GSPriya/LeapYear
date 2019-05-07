const Year = require('./year');

document.getElementById("check").onclick = function () {

    value = document.getElementById("year")

    var year = createYearInstance(value);
    if (year) {
        if (year.isLeapYear()) {
            displayValidatedMessage("Leap year");
        }
        else {
            displayValidatedMessage("Not a leap year");
        }
    }
}

function createYearInstance(value) {

    try {

        var year = new Year(Number(value));
        return year;
    }
    catch (error) {

        displayValidatedMessage("Not a valid year in Gregorian calendar as it is adapted from 1582")

    }

}

function displayValidatedMessage(message) {

    document.getElementById("message").innerHTML = message;
}