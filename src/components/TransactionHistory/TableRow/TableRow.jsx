import PropTypes from 'prop-types';
import styled from 'styled-components';

function TableRow({ data }) {
  const { type, amount, currency } = data;

  return (
    <Row>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </Row>
  );
}

export default TableRow;

TableRow.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};

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
