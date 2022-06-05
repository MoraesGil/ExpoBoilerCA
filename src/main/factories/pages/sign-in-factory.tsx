import React from 'react';
import { RemoteAuthentication } from '@/application/usecases/remote-authentication/remote-authentication';
import SignIn from '@/presentation/pages/SignIn';
import { makeApiUrl } from '../http/api-url-factory';
import { makeAxiosHttpClient } from '../http/axios-http-client-factory';

export const makeLogin: React.FC = () => {
    const remoteAuthentication = new RemoteAuthentication(
        makeApiUrl('/login'),
        makeAxiosHttpClient()
    );
    return <SignIn authentication={remoteAuthentication} />;
};
