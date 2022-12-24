export type TRegisterUser = {
  username: string;
  email: string;
  phoneNumber: number;
  password: string;
  birthDay: string;
};

export type TApiCurrentUser = {
  username: string;
  email: string;
  phoneNumber: number;
  password: string;
  birthDay: string;
  id: string;
};
