import axios from 'axios';

import { AxiosHttpClient } from './axios-http-client';
import { mockAxios } from '@/infra/test';
import { mockPostRequest } from '@/data/test';

jest.mock('axios');

type SutTypes = {
    sut: AxiosHttpClient;
    mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => ({
    sut: new AxiosHttpClient(),
    mockedAxios: mockAxios(),
});

describe('AxiosHttpClient', () => {
    test('Should call axios with valid URL and body', async () => {
        const request = mockPostRequest();
        const { sut, mockedAxios } = makeSut();
        sut.post(request);
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
    });

    test('Should return correct status code and body', () => {
        const { sut, mockedAxios } = makeSut();
        const promise = sut.post(mockPostRequest());
        expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
    });
});
