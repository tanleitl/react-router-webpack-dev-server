import React from 'react';

const TableRow = React.createClass({
  propTypes: {
    record: React.PropTypes.object,
  },

  render() {
    const props = this.props;
    const columns = props.columns;
    const record = props.record;
    const cells = [];

    for (let i = 0; i < columns.length; i++) {
      const col = columns[i];

      let text = record[col.dataIndex];

      cells.push(
      <td>
      	{text}
      </td>);

    }

    return (
      <tr>{cells}</tr>);
  },
});

export default TableRow;
