var Year = function(year) {this.year =Number(year)};

Year.prototype.validate=function()
{
    return this.year>1582;
};

Year.prototype.isLeapYear=function()
{
      if(this.year%400===0)
      {
        return true;
      }
      else if(this.year%100===0)
      {
        return false;
      }
      else if(this.year%4===0)
      {
        return true;
      }
      return false;
        
};
module.exports = Year;