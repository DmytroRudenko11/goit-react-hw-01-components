import Description from './Description/Description';
import Stats from './Stats/Stats';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileContainer>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
    </ProfileContainer>
  );
}

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number,
    views: PropTypes.number,
    followers: PropTypes.number,
  }).isRequired,
};

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
