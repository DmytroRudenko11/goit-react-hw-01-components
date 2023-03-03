import PropTypes from 'prop-types';
import TableRow from '../TableRow/TableRow';

function TransBody({ data }) {
  return (
    <tbody>
      {data.map(item => (
        <TableRow key={item.id} data={item} />
      ))}
    </tbody>
  );
}

export default TransBody;

TransBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
