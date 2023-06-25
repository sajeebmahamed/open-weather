export default class UtilityHelper {
    static convertToCelsius(kelvin: number) {
        return Math.round(kelvin - 273.15);
    };

    static convertToKmPerHour(metersPerSecond: number) {
        return Math.round(metersPerSecond * 3.6);
    };
}