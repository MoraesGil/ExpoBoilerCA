import faker from 'faker';
import { Http } from '@/domain/protocols';

export const mockHttpRequest = (): Http.Request => ({
    url: faker.internet.url(),
    method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
    body: faker.random.objectElement(),
    headers: faker.random.objectElement(),
});

export class HttpClientSpy<R = any> implements Http.Client<R> {
    url?: string;
    method?: string;
    body?: any;
    headers?: any;
    response: Http.Response<R> = {
        statusCode: Http.StatusCode.ok,
    };

    async request(data: Http.Request): Promise<Http.Response<R>> {
        this.url = data.url;
        this.method = data.method;
        this.body = data.body;
        this.headers = data.headers;
        return this.response;
    }
}
