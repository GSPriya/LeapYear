var Year = function(year) {this.year =Number(year)};

Year.prototype.validate=function()
{
    return this.year>1582;
};

Year.prototype.isLeapYear=function()
{
      return isDivisibleBy100(this.year)? isDivisibleBy400(this.year):isDivisibleBy4(this.year);
        
};

function isDivisibleBy4(number)
{
    return number%4===0;
}

function isDivisibleBy400(number)
{
    return number%400===0;
}
function isDivisibleBy100(number)
{
    return number%100===0;
}
module.exports = Year;