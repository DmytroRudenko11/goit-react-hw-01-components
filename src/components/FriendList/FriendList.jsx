import styled from 'styled-components';
import friends from '../../friends.json';
import FriendItem from './FriendItem';

function FriendList() {
  return (
    <List>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          src={friend.avatar}
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