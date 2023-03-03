import styled from 'styled-components';

function StatTitle(props) {
  return <Title>{props.titleText}</Title>;
}

export default StatTitle;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
