// import React from 'react'
// import { render } from 'react-dom'
// import { browserHistory, Router } from 'react-router'
// import routes from './config/routes'

// render(<Router history={browserHistory} routes={routes}/>, document.getElementById('app'))

/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import stubbedCourses from './stubs/COURSES'
import rootRoute from './config/routes'

render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('example')
)
