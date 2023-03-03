import styled from 'styled-components';

function TransHead() {
  return (
    <thead>
      <tr>
        <TableHeaderData>Type</TableHeaderData>
        <TableHeaderData>Amount</TableHeaderData>
        <TableHeaderData>Currency</TableHeaderData>
      </tr>
    </thead>
  );
}

export default TransHead;

const TableHeaderData = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
`;
