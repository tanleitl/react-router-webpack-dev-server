module.exports = {
  path: 'user/:id',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/User'))
    })
  }
}
