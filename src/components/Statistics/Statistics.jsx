import StatTitle from './Title';
import StatList from './StatList/StatList';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <Container>
      <StatTitle titleText={title} />
      <StatList data={stats} />
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

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
