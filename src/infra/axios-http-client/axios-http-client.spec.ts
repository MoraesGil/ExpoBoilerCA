import axios from 'axios';
import { mockHttpRequest } from '../mock-http';

import { AxiosHttpClient } from './axios-http-client';
import { mockAxios } from './mock-axios';

jest.mock('axios');

type SutTypes = {
    sut: AxiosHttpClient;
    mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
    const sut = new AxiosHttpClient();
    const mockedAxios = mockAxios();

    return {
        sut,
        mockedAxios,
    };
};

describe('AxiosHttpClient', () => {
    test('Should call axios with correct values', async () => {
        const request = mockHttpRequest();
        const { sut, mockedAxios } = makeSut();

        await sut.request(request);

        expect(mockedAxios.request).toHaveBeenCalledWith({
            url: request.url,
            data: request.body,
            headers: request.headers,
            method: request.method,
        });
    });
});
