import React from 'react'
import auth from '../utils/auth'

const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
  },

  render() {
    return <p>您已经安全退出系统！</p>
  }
})

export default Logout
