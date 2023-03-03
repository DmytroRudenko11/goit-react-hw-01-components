import PropTypes from 'prop-types';
import styled from 'styled-components';

function Description({ username, tag, location, avatar }) {
  return (
    <DescriptionWrapper>
      <ImageProfile src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <TagProfile>@{tag}</TagProfile>
      <UserLocation>{location}</UserLocation>
    </DescriptionWrapper>
  );
}

const DescriptionWrapper = styled.div`
  font-family: Oxygen, sans-serif;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ImageProfile = styled.img`
  width: 100px;
  height: 100px;
  display: box;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 30px;
`;
const UserName = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const TagProfile = styled.p`
  color: gray;
  margin-bottom: 15px;
`;
const UserLocation = styled.p`
  color: gray;
`;

export default Description;

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
