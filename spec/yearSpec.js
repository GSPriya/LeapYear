const Year = require('../src/year');

describe('validate year', function () {
    it('should display " Not a valid year. Gregorian Calendar starts from 1582" when we enter 0', function () {

        var year = new Year(0);

        expect(year.validate()).toBe(false);
    });


    it('should display " Not a valid year. Gregorian Calendar starts from 1582" when we enter special characters', function () {

        var year = new Year(',,,');

        expect(year.validate()).toBe(false);
    });
});