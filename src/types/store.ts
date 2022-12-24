import { Action } from 'vuex';
import { ICurrentUser } from './entities';
import { TRegisterUser } from './api';

export type TRegisterUserPayload = {
  user: TRegisterUser;
};

export interface IState {
  currentUser: ICurrentUser | null;
}
