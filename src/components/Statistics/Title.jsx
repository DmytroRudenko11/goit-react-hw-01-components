import styled from 'styled-components';
import PropTypes from 'prop-types';

function StatTitle({ titleText }) {
  return <Title>{titleText}</Title>;
}

export default StatTitle;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

StatTitle.propTypes = {
  titleText: PropTypes.string.isRequired,
};
