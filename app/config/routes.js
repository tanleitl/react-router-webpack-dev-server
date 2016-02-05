import auth from '../utils/auth.js'

function redirectToLogin(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function redirectToDashboard(nextState, replace) {
  if (auth.loggedIn()) {
    replace('/')
  }
}

export default {
  component: 'div',
  childRoutes: [ 
    // 用户登录
    { path: '/login',
      name:'登录',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../components/Login'))
          // cb(null, require('../components/TestPanel'))
        })
      }
    },
    {
      onEnter: redirectToLogin,  
      name:'首页', 
      path: '/',
      getComponent: (location, cb) => {
        // 未登录则跳转至登录界面
        if (auth.loggedIn()) {
          return require.ensure([], (require) => {
            cb(null, require('../components/App'))
          })
        }
        return require.ensure([], (require) => {
          cb(null, require('../components/Login'))
        })
      },
      indexRoute: {
        getComponent: (location, cb) => {
          // Only load if we're logged in
          if (auth.loggedIn()) {
            return require.ensure([], (require) => {
              cb(null, require('../components/Dashboard'))
            })
          }
          return cb()
        }
      },
      childRoutes: [
        { path: '/logout',
          name:'退出',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../components/Logout'))
            })
          }
        },
        {
          path: 'calendar',
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('../routes/Calendar/components/Calendar'))
            })
          }
        },
        require('../routes/Course'),
        require('../routes/Grades'),
        require('../routes/Messages'),
        require('../routes/Profile'),
        require('../routes/User')
      ]
    },
    { path: '*',
      name:'404',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../components/NoMatch'))
        })
      }
    },
  ]
}
