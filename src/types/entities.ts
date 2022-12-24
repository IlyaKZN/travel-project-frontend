export interface ICurrentUser {
  firstName?: string;
  lastName?: string;
  username: string;
  email: string;
  gender?: 'male' | 'female';
  age?: number;
  phoneNumber: number;
  password: string;
  birthDay: string;
  about?: string;
  id: string;
}
