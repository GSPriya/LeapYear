var Year = function(year) {this.year = year};

Year.prototype.validate=function()
{
    return this.year>1582;
};
module.exports = Year;