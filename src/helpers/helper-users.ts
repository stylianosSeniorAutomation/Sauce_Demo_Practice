import { User } from '../types/users-types';
import { usersData } from '../data/users-data';

//helper reusable custom command to get user by roles , for loop user onle foreach needed
export function getUserByRole(role: User['role']): User {
  const loginUser = usersData.find((user) => user.role === role);

  if (!loginUser) {
    throw new Error(`User with role "${role}" not found"`);
  }
  return loginUser;
}
