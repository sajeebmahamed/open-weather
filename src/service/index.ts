import axiosClient from "../utils/axios";

export const fetchWeatherData = async (lat: string | number, lon: string | number) => {
    try {
        const { data } = await axiosClient.get(`/data/2.5/weather?lat=${lat}&lon=${lon}`);
        return data;
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};

export const fetchCityData = async (city: string) => {
    try {
        const { data } = await axiosClient.get(`/geo/1.0/direct?q=${city}`);
        return data;
    } catch (error) {
        throw new Error('Failed to fetch city data');
    }
};


