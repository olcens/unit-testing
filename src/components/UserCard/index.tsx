import { FC } from 'react';
import { Info } from 'components/UserCard/Info';
import { Wrapper, InfoWrapper, InfoSection, Avatar, LocationWrapper } from './UserCard.styled';
import { Divider } from 'components/Divider';
import { User } from 'types/User/user';
import { getUserId } from 'utils/getUserId';

interface UserCardProps {
  user: User;
  selectUserHandler: (user: User) => void;
}

export const UserCard: FC<UserCardProps> = ({ user, selectUserHandler }) => {
  const { name, gender, phone, picture, location, email } = user;
  return (
    <Wrapper id={`USER-ID-${getUserId(user)}`} onClick={() => selectUserHandler(user)}>
      <InfoWrapper>
        <Avatar src={picture.medium} />
        <InfoSection>
          <Info title={'Name:'} info={name.first + ' ' + name.last} />
          <Info title={'Gender:'} info={gender} />
          <Info title={'Phone:'} info={phone} />
          <Info title={'Contact:'} info={email} />
        </InfoSection>
      </InfoWrapper>
      <Divider />
      <LocationWrapper>
        <Info title={"I'm from"} info={location.city} />
        <Info title={'Which is in'} info={location.country} />
      </LocationWrapper>
    </Wrapper>
  );
};
