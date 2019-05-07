const Year = require('./year');

document.getElementById("check").onclick = function () {

    var year = new Year(document.getElementById("year").value);

    if (year.validate()) {
        displayValidatedMessage("");
        if (year.isLeapYear()) {
            
            displayValidatedMessage("Leap Year");
        }
        else {

            displayValidatedMessage("Not a Leap Year");
        }
    }

    else {
        displayValidatedMessage("Not a Valid Year. Gregorian Calendar is adopted only from 1582");
    }

}

function displayValidatedMessage(message) {
    document.getElementById("message").innerHTML = message;
}


