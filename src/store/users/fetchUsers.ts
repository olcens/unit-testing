import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserApiResponse } from 'types/User/user';

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const response = await axios.get<UserApiResponse>('https://randomuser.me/api/?results=30');
  return {
    fetchedUsers: response.data.results
  };
});
