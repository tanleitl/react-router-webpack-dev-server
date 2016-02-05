/*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'
import AuthMixin from './AuthMixin'
import Breadcrumbs from 'react-breadcrumbs'


// class App extends React.Component {
const App = React.createClass({
  mixins:[AuthMixin],
  render() {
    return (
      <div>
        <GlobalNav loggedIn ={this.state.loggedIn}/>
        <Breadcrumbs 
          routes={this.props.routes} 
          params={this.props.params} 
          // breadcrumbName="My breadcrumb name" 
          displayMissing="true|false" displayMissingText="未定义"
          setDocumentTitle={true}
          separator=" / "
          excludes={['App']} />
        <div style={{ padding: 20 }}>
          {this.props.children || <Dashboard courses={COURSES} />}
        </div>
      </div>
    )
  }
}
)
module.exports = App
