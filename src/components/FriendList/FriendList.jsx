import styled from 'styled-components';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
}

export default FriendList;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  margin: 0 auto;
  margin-top: 100px;
`;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
