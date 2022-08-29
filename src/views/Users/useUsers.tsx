import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'store/users/fetchUsers';
import { usersSelectors } from 'store/users/selectors';
import { AppDispatch } from 'store/store';
import { getUsersParams } from 'types/User/user';
import { setFilterText } from 'store/users/usersSlice';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';

export const useUsers = () => {
  const dispatch = useDispatch<AppDispatch>(); // TODO -- put dispatch type inside redux config
  const users = useSelector(usersSelectors.getFetchedUsers);
  const isLoading = useSelector(usersSelectors.getAreUsersFetching);
  const filterText = useSelector(usersSelectors.getFilterText);

  const getFilteredUsers = useCallback(
    (params: getUsersParams) => {
      dispatch(fetchUsers(params));
    },
    [dispatch]
  );

  const setUsersFilterText = useCallback(
    (text: string) => {
      dispatch(setFilterText(text));
    },
    [dispatch]
  );

  useUpdateEffect(() => {
    dispatch(fetchUsers({ results: 30 }));
  }, []);

  return {
    users,
    isLoading,
    filterText,
    getFilteredUsers,
    setUsersFilterText
  };
};
