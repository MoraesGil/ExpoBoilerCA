import axios, { AxiosResponse } from 'axios';
import { Http } from '@/domain/protocols/http-client';

export class AxiosHttpClient implements Http.Client {
    // eslint-disable-next-line class-methods-use-this
    async request(data: Http.Request): Promise<Http.Response> {
        let axiosResponse: AxiosResponse;
        try {
            axiosResponse = await axios.request({
                url: data.url,
                method: data.method,
                data: data.body,
                headers: data.headers,
            });
        } catch (error) {
            axiosResponse = error.response;
        }
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data,
        };
    }
}
