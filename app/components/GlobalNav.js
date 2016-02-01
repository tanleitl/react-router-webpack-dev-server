import React from 'react'
import { Link } from 'react-router'
import auth from '../utils/auth.js'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
 
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

    return (
      <div id="main-navigation">
        <div className="container">
          <ul className="main-menu">
            <li><a href="#">首页</a>
              <ul className="four-columns">
                <li className="one">
                  <h5>平台首页</h5>
                  <ol>
                    <li><a href="#"><i className="icon-group"></i>起始页</a></li>
                  </ol>
                </li>
                <li className="one">
                  <h5>公告信息</h5>
                  <ol>
                    <li><a href="#"><i className="icon-circle-arrow-left"></i>公告管理</a></li>
                  </ol>
                </li>
                <li className="one">
                  <h5>意见反馈</h5>
                  <ol>
                    <li><a href="#"><i className=" icon-cogs"></i>意见反馈</a></li>
                    <li><a href="#"><i className="icon-th-large"></i>意见反馈统计</a></li>
                  </ol>
                </li>
              </ul>
            </li>
            <li><a href="#">我的工作台</a>
              <ul className="four-columns">
                <li className="one">
                  <h5>我的工作台</h5>
                  <ol>
                    <li><a href="#"><i className="icon-group"></i>工作台首页</a></li>
                    <li><a href="#"><i className="icon-group"></i>手机客户端</a></li>
                    <li><a href="#"><i className="icon-user"></i>我的传阅</a></li>
                    <li><a href="#"><i className="icon-user"></i>我的工单</a></li>
                    <li><a href="#"><i className="icon-user"></i>常用意见</a></li>
                    <li><a href="#"><i className="icon-user"></i>发起工单</a></li>
                  </ol>
                </li>
              </ul>
            </li>
          </ul>
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


      // <div style={styles.wrapper}>
      //   <div style={{ float: 'left' }}>
      //     <Link to="/" style={styles.link}>首页</Link>{' '}
      //     <Link to="/calendar" style={styles.link} activeStyle={styles.activeLink}>Calendar</Link>{' '}
      //     <Link to="/calendar" style={styles.link} activeStyle={styles.activeLink}>室外宏站</Link>{' '}
      //     <Link to="/grades" style={styles.link} activeStyle={styles.activeLink}>室内覆盖</Link>{' '}
      //     <Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>报表</Link>{' '}
      //     <Link to="/user/Lyman" style={styles.link} activeStyle={styles.activeLink}>系统管理</Link>{' '}
      //   </div>
      //   <div style={{ float: 'right' }}>
      //     <Link style={styles.link} to="/profile">{user.name}</Link> 
      //       {loggedIn ? (
      //         <Link style={styles.link} to="/logout">Log out</Link>
      //       ) : (
      //         <Link style={styles.link} to="/login">Sign in</Link>
      //       )}
      //   </div>
      // </div>