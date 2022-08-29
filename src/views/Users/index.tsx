import { useUsers } from 'views/Users/useUsers';
import { UserCard } from 'components/UserCard';
import { Title, Wrapper, LoadingText } from './Users.styled';

export const Users = () => {
  const { users, isLoading, filterText, selectUser } = useUsers();

  return (
    <Wrapper>
      <Title>Users list</Title>
      {isLoading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        users
          .filter((u) => u.name.first.includes(filterText) || u.name.last.includes(filterText))
          .map((user) => <UserCard key={user.email} user={user} selectUserHandler={selectUser} />)
      )}
    </Wrapper>
  );
};
