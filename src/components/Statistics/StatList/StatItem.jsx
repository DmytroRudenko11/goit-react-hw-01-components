import styled from 'styled-components';
import PropTypes from 'prop-types';

function StatItem({ label, percentage, color }) {
  return (
    <Item color={color}>
      <Text>{label}</Text>
      <Text>{percentage}</Text>
    </Item>
  );
}

export default StatItem;

StatItem.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
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
