import { CurrentUserInterface } from './currentUser.interface';

export interface LoginResponseInterface {
  email: any;
  statusCode: number;
  data: CurrentUserInterface;
  message: string;
  success: boolean;
}
