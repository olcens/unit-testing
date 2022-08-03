import { RootState } from 'store/store';
import { createSelector } from '@reduxjs/toolkit';
import { SliceState } from 'store/SliceState.enum';

const getUsersSlice = (state: RootState) => state.usersSlice;
export const getAreUsersFetching = createSelector([getUsersSlice], ({ sliceState }) => sliceState === SliceState.PENDING);
export const getFetchedUsers = createSelector([getUsersSlice], ({ fetchedUsers }) => fetchedUsers);
