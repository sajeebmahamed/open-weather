export default class UtilityHelper {
    static convertToCelsius(kelvin: number) {
        return Math.round(kelvin - 273.15);
    };

    static convertToKmPerHour(metersPerSecond: number) {
        return Math.round(metersPerSecond * 3.6);
    };

    static convertToFahrenheit(kelvin: number) {
        return Math.round((kelvin - 273.15) * 1.8 + 32);
    };

}