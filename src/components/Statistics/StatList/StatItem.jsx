import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  color: PropTypes.string.isRequired,
  // data: PropTypes.shape.isRequired,
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
