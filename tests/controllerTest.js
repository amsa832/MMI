const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI');

describe('celsiusToFahrenheit()', function () {
    it('wandelt 0 Grad Celsius in 32 Grad Fahrenheit um', function () {
        expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32);
    });

    it('wandelt 100 Grad Celsius in 212 Grad Fahrenheit um', function () {
        expect(apiTemperature.celsiusToFahrenheit(100)).to.equal(212);
    });

    it('wandelt -40 Grad Celsius in -40 Grad Fahrenheit um', function () {
        expect(apiTemperature.celsiusToFahrenheit(-40)).to.equal(-40);
    });

    it('wandelt 37 Grad Celsius in 98.6 Grad Fahrenheit um', function () {
        expect(apiTemperature.celsiusToFahrenheit(37)).to.be.closeTo(98.6, 1e-10);
    });
});

// Der bestehende Funktionsname "Celcius" wird aus dem Demoprojekt uebernommen.
describe('fahrenheitToCelcius()', function () {
    it('wandelt 32 Grad Fahrenheit in 0 Grad Celsius um', function () {
        expect(apiTemperature.fahrenheitToCelcius(32)).to.equal(0);
    });

    it('wandelt 212 Grad Fahrenheit in 100 Grad Celsius um', function () {
        expect(apiTemperature.fahrenheitToCelcius(212)).to.equal(100);
    });

    it('wandelt -40 Grad Fahrenheit in -40 Grad Celsius um', function () {
        expect(apiTemperature.fahrenheitToCelcius(-40)).to.equal(-40);
    });

    it('wandelt 98.6 Grad Fahrenheit in 37 Grad Celsius um', function () {
        expect(apiTemperature.fahrenheitToCelcius(98.6)).to.be.closeTo(37, 1e-10);
    });
});
