import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';
import config from '../config/config';

export class AxiosClient {
    private axiosInstance: AxiosInstance;

    constructor(apiKey: string) {
        this.axiosInstance = axios.create({
            baseURL: config.API_URL,
            params: {
                'appid': apiKey, // Set the API key as a query parameter
            },
        });
    }

    public async get<T = unknown, R = AxiosResponse<T>>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.axiosInstance.get(url, config);
    }
}

const apiKey = process.env.REACT_APP_API_KEY!;
const axiosClient = new AxiosClient(apiKey);

export default axiosClient;
