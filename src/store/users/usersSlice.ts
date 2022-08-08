import { SliceState } from 'store/SliceState.enum';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from 'store/users/fetchUsers';
import { User } from 'types/User/user';

export interface UsersSliceState {
  fetchedUsers: User[];
  sliceState: SliceState;
}

const initialState: UsersSliceState = {
  fetchedUsers: [],
  sliceState: SliceState.IDLE
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.sliceState = SliceState.PENDING;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.sliceState = SliceState.REJECTED;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.sliceState = SliceState.FULFILLED;
        state.fetchedUsers = action.payload.fetchedUsers;
      });
  }
});

export default usersSlice.reducer;
