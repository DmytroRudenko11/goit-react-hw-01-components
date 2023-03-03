import styled from 'styled-components';
import StatItem from './StatItem';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function StatList({ data }) {
  return (
    <List>
      {data.map(item => (
        <StatItem key={item.id} color={getRandomHexColor()} data={item} />
      ))}
    </List>
  );
}

export default StatList;

const List = styled.ul`
  display: flex;
  width: 100%;
`;
