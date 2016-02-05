module.exports = {
  path: 'messages',
  name:'消息',
  item:'XXX',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Messages'))
    })
  }
}
