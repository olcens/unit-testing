import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'store/users/fetchUsers';
import { getFetchedUsers, getAreUsersFetching } from 'store/users/selectors';
import { AppDispatch } from 'store/store';
import { getUsersParams } from '../../types/User/user';

export const useUsers = () => {
  const dispatch = useDispatch<AppDispatch>(); // TODO -- put dispatch type inside redux config
  const users = useSelector(getFetchedUsers);
  const isLoading = useSelector(getAreUsersFetching);

  const getFilteredUsers = useCallback(
    (params: getUsersParams) => {
      dispatch(fetchUsers(params));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchUsers({ results: 30 }));
  }, []);

  return {
    users,
    isLoading,
    getFilteredUsers
  };
};
