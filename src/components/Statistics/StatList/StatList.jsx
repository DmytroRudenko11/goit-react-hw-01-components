import styled from 'styled-components';
import StatItem from './StatItem';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function StatList({ data }) {
  return (
    <List>
      {data.map(item => (
        <StatItem
          key={item.id}
          color={getRandomHexColor()}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </List>
  );
}

export default StatList;

const List = styled.ul`
  display: flex;
  width: 100%;
`;

StatList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
