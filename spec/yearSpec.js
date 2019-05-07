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