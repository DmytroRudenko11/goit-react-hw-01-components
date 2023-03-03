import StatTitle from './Title';
import StatList from './StatList/StatList';
import data from '../../data.json';
import styled from 'styled-components';

function Statistics() {
  return (
    <Container>
      <StatTitle titleText="Upload stats" />
      <StatList data={data} />
    </Container>
  );
}

export default Statistics;

const Container = styled.section`
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
  padding-top: 20px;
`;
