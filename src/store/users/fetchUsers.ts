import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersParams } from 'types/User/user';
import { getUsers } from '../../service/usersData.service';

export const fetchUsers = createAsyncThunk('fetchUsers', async (params: getUsersParams) => {
  const users = await getUsers(params);

  return {
    fetchedUsers: users
  };
});
