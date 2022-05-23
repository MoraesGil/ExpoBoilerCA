import { Http } from '@/domain/protocols';
import { Authentication } from '@/domain/usecases';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';

export class RemoteAuthentication implements Authentication {
    constructor(
        private readonly url: string,
        private readonly httpClient: Http.Client<RemoteAuthentication.Model>
    ) {}

    async auth(params: Authentication.Params): Promise<Authentication.Model> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'post',
            body: params,
        });
        switch (httpResponse.statusCode) {
            case Http.StatusCode.ok:
                return httpResponse.body?.data;
            case Http.StatusCode.unauthorized:
                throw new InvalidCredentialsError();
            default:
                throw new UnexpectedError();
        }
    }
}

export namespace RemoteAuthentication {
    export type Model = Authentication.Model;
}
