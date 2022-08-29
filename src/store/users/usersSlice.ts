import { SliceState } from 'store/SliceState.enum';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from 'store/users/fetchUsers';
import { User } from 'types/User/user';

export interface UsersSliceState {
  fetchedUsers: User[];
  sliceState: SliceState;
  filterText: string;
  selectedUser?: User;
}

const initialState: UsersSliceState = {
  fetchedUsers: [],
  sliceState: SliceState.IDLE,
  filterText: ''
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilterText: (state, action: PayloadAction<string>) => {
      state.filterText = action.payload;
    },
    setSelectedUser: (state, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
    }
  },
  extraReducers: (builder) => {
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

export const { setFilterText, setSelectedUser } = usersSlice.actions;

export default usersSlice.reducer;
