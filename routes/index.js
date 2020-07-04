module.exports = app => {

  // Base URLS
  app.use('/', require('./base.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/products', require('./product.routes'))
  app.use('/admin', require('./admin.routes'))
}