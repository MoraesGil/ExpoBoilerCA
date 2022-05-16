import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import { AccountModel } from '@/domain/models';
import { Http } from '@/domain/protocols';
import { Authentication, AuthenticationParams } from '@/domain/usecases';

export class RemoteAuthentication implements Authentication {
    constructor(
        private readonly url: string,
        private readonly httpClient: Http.Client<AccountModel>
    ) {}

    async auth(params: AuthenticationParams): Promise<AccountModel> {
        const httpResponse = await this.httpClient.request({
            method: 'POST',
            url: this.url,
            body: params,
        });

        switch (httpResponse.statusCode) {
            case Http.StatusCode.ok:
                return httpResponse.body;
            case Http.StatusCode.unauthorized:
                throw new InvalidCredentialsError();
            default:
                throw new UnexpectedError();
        }
    }
}
