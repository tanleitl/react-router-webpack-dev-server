import React from 'react'
import {Table} from 'react-bootstrap'

import TyTableRow from './TyTableRow'
import TyTableHead from './TyTableHead'

const TyTable = React.createClass({

  getDefaultProps() {
    return {
      data: [],
      columns : [],
      rowKey(o) {
        return o.key;
      },
      rowClassName() {
        return '';
      },
      expandedRowClassName() {
        return '';
      },
      onExpandedRowsChange() {
      },
    };
  },

  getInitialState() {
    const props = this.props;
    return {
      data: this.props.data,
      currentColumnsPage: 0,
    };
  },

  getCurrentColumns() {    
    return this.props.columns;
  },


  getRowsByData(data) {
      const props = this.props;
      const keyFn = props.rowKey;    

      let rst = [];

      for (let i = 0; i < data.length; i++) {
        const record = data[i];
        const key = keyFn ? keyFn(record, i) : undefined;

        rst.push(<TyTableRow
          record={record}
          key={key}
          columns={props.columns}/>);
      }
      return rst;
  },

  getRows() {
    return this.getRowsByData(this.state.data, true, 0);
  },

  getColGroup() {
    let cols = [];
    cols = cols.concat(this.props.columns.map((c)=> {
      return <col key={c.key} style={{width: c.width}}></col>;
    }));
    return <colgroup>{cols}</colgroup>;
  },

  render() {

    const tbody = (
        <tbody>
          {this.getRows()}
        </tbody>
    )

    return(
      <Table striped bordered condensed hover>
        {this.getColGroup()}        
        <TyTableHead columns={this.props.columns} />
        {tbody}
      </Table>
    )
  }

});


export default TyTable