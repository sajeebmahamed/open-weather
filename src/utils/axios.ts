import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';
import config from '../config/config';

export class AxiosClient {

    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: config.API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public async get<T = unknown, R = AxiosResponse<T>>(
        url: string,
        config?: AxiosRequestConfig,

    ): Promise<R> {
        return this.axiosInstance.get(url, config);
    }
}

const axiosClient = new AxiosClient();

export default axiosClient;


