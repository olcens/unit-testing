import { RootState } from 'store/store';
import { createSelector } from '@reduxjs/toolkit';
import { SliceState } from 'store/SliceState.enum';

const getUsersSlice = (state: RootState) => state.usersSlice;
const getAreUsersFetching = createSelector([getUsersSlice], ({ sliceState }) => sliceState === SliceState.PENDING);
const getFetchedUsers = createSelector([getUsersSlice], ({ fetchedUsers }) => fetchedUsers);
const getFilterText = createSelector([getUsersSlice], ({ filterText }) => filterText);
const getSelectedUser = createSelector([getUsersSlice], ({ selectedUser }) => selectedUser);

export const usersSelectors = {
  getAreUsersFetching,
  getFetchedUsers,
  getFilterText,
  getSelectedUser
};
