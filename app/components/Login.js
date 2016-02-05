import React from 'react'
import auth from '../utils/auth.js'
import {Input, ButtonInput, Glyphicon} from 'react-bootstrap'

const Login = React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState() {
    return {
      error: false
    }
  },

  handleSubmit(event) {
    event.preventDefault()
    const email = this.refs.email.getValue()
    const pass = this.refs.pass.getValue()

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    })
  },

  render() {
    return (      
      <form onSubmit={this.handleSubmit}>
        <Input type="email" ref="email" addonBefore=<Glyphicon glyph="user" /> placeholder="Enter email" defaultValue="joe@example.com" />
        <Input type="password" ref="pass" addonBefore=<Glyphicon glyph="lock" /> placeholder="password" />(提示: password1)
        <ButtonInput type="submit" value="登录" />
        {this.state.error && (
          <p>登录失败</p>
        )}
      </form>
    )
  }

})

export default Login
