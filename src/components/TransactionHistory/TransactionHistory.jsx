import styled from 'styled-components';
import PropTypes from 'prop-types';
import TransHead from './TransHead/TransHead';
import TransBody from './TransBody/TransBody';

function TransactionHistory({ items }) {
  return (
    <Table>
      <TransHead />
      <TransBody data={items} />
    </Table>
  );
}

export default TransactionHistory;

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
`;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
