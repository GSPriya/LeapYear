const Year = require('../src/year');

describe('validate year', function () {
    it('should return false when we enter 0', function () {

        var year = new Year(0);

        expect(year.validate()).toBe(false);
    });


    it('should return false when we enter special characters', function () {

        var year = new Year(',,,');

        expect(year.validate()).toBe(false);
    });

    
});

describe('check valid leap year', function () {
    it('should return true when the year is divisible by 400', function () {

        var year = new Year(1600);

        expect(year.isLeapYear()).toBe(true);
    });

    it('should return false when the year is divisible by 100', function () {

        var year = new Year(1700);

        expect(year.isLeapYear()).toBe(false);
    });

    it('should return true when the year is divisible by 4', function () {

        var year = new Year(2004);

        expect(year.isLeapYear()).toBe(true);
    });


});