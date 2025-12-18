type UsersRoles = 'standard' | 'locked';

type User = {
  role: UsersRoles;
  username: string;
  password: string;
};
export { User };
