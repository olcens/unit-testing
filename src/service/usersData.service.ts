import axios from 'axios';
import { User, UserApiResponse } from '../types/User/user';

export const getUsers = async (params: any): Promise<User[]> => {
  const response = await axios.get<UserApiResponse>('https://randomuser.me/api/', { params });

  return response.data.results;
};
