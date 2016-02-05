import React from 'react'

import gridInstance from './gridInstance'
import TyTable from './TyTable'

const data = [
  {
    key:1,
    firstName:'Mark11',
    lastName:'Lee',
    userName:'Lyman'
  },
  {
    key:2,
    firstName:'Mark2',
    lastName:'Lee2',
    userName:'Lyman2'
  },
  {
    key:3,
    firstName:'Mark3',
    lastName:'Lee3',
    userName:'Lyman3'
  },
  {
    key:4,
    firstName:'Mark4',
    lastName:'Lee4',
    userName:'Lyman4'
  },
  {
    key:5,
    firstName:'Mark5',
    lastName:'Lee5',
    userName:'Lyman55'
  }
];

const columns = [
  {id: '1', title: '#',           dataIndex: 'key',       key: 'key',       width: 100},
  {id: '2', title: 'First Name',  dataIndex: 'firstName', key: 'firstName', width: 100},
  {id: '3', title: 'Last Name',   dataIndex: 'lastName',  key: 'lastName',  width: 200},
  {id: '4', title: 'User Name',   dataIndex: 'userName',  key: 'userName',  width: 200},   
];

import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

const breadcrumbInstance = (
  <Breadcrumb>
    <BreadcrumbItem href="/">
      Home
    </BreadcrumbItem>
    <BreadcrumbItem href="http://getbootstrap.com/components/#breadcrumbs">
      Library
    </BreadcrumbItem>
    <BreadcrumbItem active>
      Data
    </BreadcrumbItem>
  </Breadcrumb>
);

const TestPanel = React.createClass({
  render() {
    return (
	    <div>
		    <h1>TestPanel</h1>
        <br/>
        {breadcrumbInstance}
		    <br/>
		    {gridInstance}
		    <br/>
		    <TyTable data={data} columns={columns}/>
	    </div>

    )
  }
})

export default TestPanel
