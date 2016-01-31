import React from 'react'
import { Link } from 'react-router'
import auth from '../utils/auth.js'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark,
  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  ...styles.link,
  background: light,
  color: dark
}

class GlobalNav extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }

  render() {
    const { user,loggedIn } = this.props
    // console.log(auth.loggedIn())
    // console.log(this.props.loggedIn)
    return (
      <div style={styles.wrapper}>
        <div style={{ float: 'left' }}>
          <Link to="/" style={styles.link}>首页</Link>{' '}
          <Link to="/calendar" style={styles.link} activeStyle={styles.activeLink}>室外宏站</Link>{' '}
          <Link to="/grades" style={styles.link} activeStyle={styles.activeLink}>室内覆盖</Link>{' '}
          <Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>报表</Link>{' '}
          <Link to="/user/Lyman" style={styles.link} activeStyle={styles.activeLink}>系统管理</Link>{' '}
        </div>
        <div style={{ float: 'right' }}>
          <Link style={styles.link} to="/profile">{user.name}</Link> 
            {loggedIn ? (
              <Link style={styles.link} to="/logout">Log out</Link>
            ) : (
              <Link style={styles.link} to="/login">Sign in</Link>
            )}
        </div>
      </div>
    )
  }
}

GlobalNav.defaultProps = {
  user: {
    id: 1,
    name: 'Lyman(超级管理员)'
  }
}

export default GlobalNav
