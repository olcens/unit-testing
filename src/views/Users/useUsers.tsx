import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'store/users/fetchUsers';
import { getFetchedUsers, getAreUsersFetching } from 'store/users/selectors';
import { AppDispatch } from 'store/store';

export const useUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(getFetchedUsers);
  const isLoading = useSelector(getAreUsersFetching);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return {
    users,
    isLoading
  };
};
