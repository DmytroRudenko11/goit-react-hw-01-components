import styled from 'styled-components';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function StatItem({ data, color }) {
  return (
    <Item color={color}>
      <Text>{data.label}</Text>
      <Text>{data.percentage}</Text>
    </Item>
  );
}

export default StatItem;

StatItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.string,
  color: PropTypes.string,
};

const Item = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.color};
`;
// ${(props) => props.topValue || 0}px;

const Text = styled.span`
  color: white;
`;
