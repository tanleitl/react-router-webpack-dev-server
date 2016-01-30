import React from 'react'
import { Link } from 'react-router'
import auth from '../utils/auth'
import AuthMixin from './AuthMixin'

const App = React.createClass({
  mixins:[AuthMixin],

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link> (changes depending on auth status)</li>
          <li><Link to="/page2">Page Two</Link> (authenticated)</li>
          <li><Link to="/user/foo">User: Foo</Link> (authenticated)</li>
        </ul>
        {this.props.children}
      </div>
    )
  }

})

export default App
