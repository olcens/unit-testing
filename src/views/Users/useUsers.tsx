import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'store/users/fetchUsers';
import { usersSelectors } from 'store/users/selectors';
import { AppDispatch } from 'store/store';
import { getUsersParams, User } from 'types/User/user';
import { setFilterText, setSelectedUser } from 'store/users/usersSlice';

export const useUsers = () => {
  const dispatch = useDispatch<AppDispatch>(); // TODO -- put dispatch type inside redux config
  const users = useSelector(usersSelectors.getFetchedUsers);
  const selectedUser = useSelector(usersSelectors.getSelectedUser);
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

  const selectUser = useCallback(
    (user: User) => {
      dispatch(setSelectedUser(user));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchUsers({ results: 30 }));
  }, []);

  return {
    users,
    isLoading,
    filterText,
    selectedUser,
    getFilteredUsers,
    setUsersFilterText,
    selectUser
  };
};
