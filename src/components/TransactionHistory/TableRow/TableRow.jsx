import PropTypes from 'prop-types';
import styled from 'styled-components';

function TableRow({ type, amount, currency }) {
  return (
    <Row>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </Row>
  );
}

export default TableRow;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Row = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
  }
`;

TableRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
