import styled from 'styled-components';
import PropTypes from 'prop-types';

function FriendItem({ isOnline, name, avatar }) {
  return (
    <Item>
      <Online online={isOnline} />
      <img
        src="https://cdn-icons-png.flaticon.com/512/1998/1998749.png"
        alt={name}
        width="48"
      />
      <p>{name}</p>
    </Item>
  );
}

export default FriendItem;

FriendItem.propType = {
  isOnline: PropTypes.bool,
  // avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
};

const Item = styled.li`
  font-size: 24px;
  font-weight: 500;
  display: flex;
  padding: 10px;
  gap: 15px;
  align-items: center;
  box-shadow: -3px 0px 24px -8px rgba(0, 0, 0, 0.79);
`;

const Online = styled.span`
  display: block;

  ::before {
    content: '';
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color: ${props => {
      return props.online ? 'green' : 'red';
    }};
  }
`;
