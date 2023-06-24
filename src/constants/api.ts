import config from '../config/config';

const endpoints = () => {
    const baseUrl = `${config.API_URL}/api/base`;

    return {
        fetchWeather: `${baseUrl}/weather`,
    };
};

const api = {
    endpoints,
}
export default api;