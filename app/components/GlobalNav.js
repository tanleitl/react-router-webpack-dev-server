import React from 'react'
import { Link } from 'react-router'
import auth from '../utils/auth.js'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

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
            <li ><Link to="/">首页</Link>
              <ul className="four-columns">
                <li className="one">
                  <h5>平台首页</h5>
                  <ol>
                    <li><Link to="/"><i className="icon-group">起始页</i></Link></li>
                  </ol>
                </li>
                <li className="one">
                  <h5>公告信息</h5>
                  <ol>
                    <li><Link to="/grades"><i className="icon-circle-arrow-left">公告管理</i></Link></li>
                  </ol>
                </li>
                <li className="one">
                  <h5>意见反馈</h5>
                  <ol>
                    <li><a href="#"><i className="icon-cogs">意见反馈</i></a></li>
                    <li><a href="#"><i className="icon-th-large">意见反馈统计</i></a></li>
                  </ol>
                </li>
              </ul>
            </li>
            <li><Link to="/messages">我的工作台</Link>
              <ul className="four-columns">
                <li className="one">
                  <h5>我的工作台</h5>
                  <ol>
                    <li><Link to="/messages"><i className="icon-group">工作台首页</i></Link></li>
                    <li><a href="#"><i className="icon-group">手机客户端</i></a></li>
                    <li><a href="#"><i className="icon-user">我的传阅</i></a></li>
                    <li><a href="#"><i className="icon-user">我的工单</i></a></li>
                    <li><a href="#"><i className="icon-user">常用意见</i></a></li>
                    <li><a href="#"><i className="icon-user">发起工单</i></a></li>
                  </ol>
                </li>
              </ul>
            </li>


            <li style={{ float: 'right' }}>
                {loggedIn ? (
                  <Link to="/logout">退出</Link>
                ) : (
                  <Link to="/login">登录</Link>
                )}
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