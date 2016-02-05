import React from 'react';

const TyTableHead = React.createClass({
  propTypes: {
    columns: React.PropTypes.array,
  },

  getThs() {
    let ths = [];
    ths = ths.concat(this.props.columns);

    return ths.map((c)=> {
      if (c.colSpan !== 0) {
        return <th key={c.key} colSpan={c.colSpan} className={c.className || ''}>{c.title}</th>;
      }
    });
  },
  render() {
    return (
        <thead>
          <tr>
            {this.getThs()}
          </tr>
        </thead>
      )
  },


});



export default TyTableHead;
