import { configureStore } from '@reduxjs/toolkit';
import usersSlice from 'store/users/usersSlice';

export const store = configureStore({
  reducer: {
    usersSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
