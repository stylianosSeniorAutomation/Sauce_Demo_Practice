import { User } from '../types/users-types';

export const usersData: User[] = [
  { role: 'standard', username: 'standard_user', password: 'secret_sauce' },
  { role: 'locked', username: 'locked_out_user', password: 'secret_sauce' },
] as const;
