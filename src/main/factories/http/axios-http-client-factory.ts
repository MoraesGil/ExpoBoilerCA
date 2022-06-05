import { AxiosHttpClient } from '@/infra/axios-http-client';

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient();
