import faker from 'faker';

import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import { RemoteAuthentication } from './remote-authentication';
import { HttpClientSpy } from '@/infra/mock-http';
import { mockAuthenticationModel, mockAuthenticationParams } from './mock-authentication';
import { Http } from '@/domain/protocols';

type SutTypes = {
    sut: RemoteAuthentication;
    httpClientSpy: HttpClientSpy<RemoteAuthentication.Model>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClientSpy = new HttpClientSpy<RemoteAuthentication.Model>();
    const sut = new RemoteAuthentication(url, httpClientSpy);
    return {
        sut,
        httpClientSpy,
    };
};

describe('RemoteAuthentication', () => {
    test('Should call HttpClient with correct values', async () => {
        const url = faker.internet.url();
        const { sut, httpClientSpy } = makeSut(url);
        const authenticationParams = mockAuthenticationParams();

        await sut.auth(authenticationParams);

        expect(httpClientSpy.url).toBe(url);
        expect(httpClientSpy.method).toBe('post');
        expect(httpClientSpy.body).toEqual(authenticationParams);
    });

    test('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.response = {
            statusCode: Http.StatusCode.unauthorized,
        };

        const promise = sut.auth(mockAuthenticationParams());

        await expect(promise).rejects.toThrow(new InvalidCredentialsError());
    });

    test('Should throw UnexpectedError if HttpClient returns 400', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.response = {
            statusCode: Http.StatusCode.badRequest,
        };

        const promise = sut.auth(mockAuthenticationParams());

        await expect(promise).rejects.toThrow(new UnexpectedError());
    });

    test('Should throw UnexpectedError if HttpClient returns 500', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.response = {
            statusCode: Http.StatusCode.serverError,
        };

        const promise = sut.auth(mockAuthenticationParams());

        await expect(promise).rejects.toThrow(new UnexpectedError());
    });

    test('Should throw UnexpectedError if HttpClient returns 404', async () => {
        const { sut, httpClientSpy } = makeSut();
        httpClientSpy.response = {
            statusCode: Http.StatusCode.notFound,
        };

        const promise = sut.auth(mockAuthenticationParams());

        await expect(promise).rejects.toThrow(new UnexpectedError());
    });

    test('Should return an Authentication.Model if HttpClient returns 200', async () => {
        const { sut, httpClientSpy } = makeSut();
        const httpResult = { data: mockAuthenticationModel() };
        httpClientSpy.response = {
            statusCode: Http.StatusCode.ok,
            body: httpResult,
        };

        const account = await sut.auth(mockAuthenticationParams());

        expect(account).toEqual(httpResult.data);
    });
});
