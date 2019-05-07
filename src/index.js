const Year = require('./year');


var year =new Year(document.getElementById("year").value);

document.getElementById("check").onclick = function(){
    if(year.validate())
    {
        document.getElementById("message").style.visibility = "hidden";
    }
    
    else
    {
        document.getElementById("message").style.visibility = "visible";
    }
    
}


