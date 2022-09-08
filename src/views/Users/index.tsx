import { useUsers } from 'views/Users/useUsers';
import { UserCard } from 'components/UserCard';
import { Title, Wrapper, LoadingText } from './Users.styled';

export const Users = () => {
  const { users, isLoading, selectUser } = useUsers();

  return (
    <Wrapper>
      <Title>Users list</Title>
      {isLoading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        users.map((user) => <UserCard key={user.email} user={user} selectUserHandler={selectUser} />)
      )}
    </Wrapper>
  );
};
