export namespace Http {
    export type Request = {
        url: string;
        method: Method;
        body?: any;
        headers?: any;
    };

    export namespace Response {
        export type Body<R> = {
            data?: R;
            errors?: any;
        };
    }

    export type Response<R = any> = {
        statusCode: StatusCode;
        body?: Response.Body<R>;
    };

    export interface Client<R = any> {
        request: (data: Request) => Promise<Response<R>>;
    }

    export enum Method {
        post = 'post',
        get = 'get',
        put = 'put',
        delete = 'delete',
        patch = 'patch',
    }

    export enum StatusCode {
        ok = 200,
        created = 201,
        noContent = 204,
        badRequest = 400,
        unauthorized = 401,
        forbidden = 403,
        notFound = 404,
        formError = 421,
        unprocessableEntity = 422,
        serverError = 500,
    }
}
