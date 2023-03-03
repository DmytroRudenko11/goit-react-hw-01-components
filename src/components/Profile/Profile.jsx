import Description from './Description/Description';
import Stats from './Stats/Stats';
import styled from 'styled-components';
import user from '../../user.json';

function Profile() {
  return (
    <ProfileContainer>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats stats={user.stats} />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid skyblue;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.75);
`;

export default Profile;
