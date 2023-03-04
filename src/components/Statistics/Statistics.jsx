import StatList from './StatList/StatList';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <Container title={title}>
      {title && <Title>{title}</Title>}
      <StatList data={stats} />
    </Container>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Container = styled.section`
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
  padding-top: ${p => (p.title ? '20px' : '0px')};
`;
