import axios, { AxiosPromise } from 'axios';
import { TApiCurrentUser, TRegisterUser } from '@/types/api';
import { BASE_URL } from './constants';

// eslint-disable-next-line @typescript-eslint/no-empty-function, import/prefer-default-export
export const registerUserApi = (userData: TRegisterUser): AxiosPromise<TApiCurrentUser> => axios.post(`${BASE_URL}/users`, { userData });
