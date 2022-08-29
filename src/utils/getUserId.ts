import { User } from '../types/User/user';

export const getUserId = (user: User) => {
  return `${user.name.first}-${user.name.last}`;
};
