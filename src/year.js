var Year = function(year) {this.year =Number(year)};

Year.prototype.validate=function()
{
    console.log(this.year);
    return this.year>1582;
};

Year.prototype.isLeapYear=function()
{
    console.log(this.year);
      if(this.year%400===0)
        return true;
};
module.exports = Year;