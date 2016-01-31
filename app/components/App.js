/*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'
import AuthMixin from './AuthMixin'

// class App extends React.Component {
const App = React.createClass({
  mixins:[AuthMixin],
  render() {
    return (
      <div>
        <GlobalNav loggedIn ={this.state.loggedIn}/>
        <div style={{ padding: 20 }}>
          {this.props.children || <Dashboard courses={COURSES} />}
        </div>
      </div>
    )
  }
}
)
module.exports = App
