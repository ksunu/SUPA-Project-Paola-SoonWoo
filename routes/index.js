module.exports = app => {
  const api_key = process.env.GOOGLE_API_KEY

  // ACCESS RESTRICTIONS
  app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated()
    next()
  })

  // currentUser = req.user
  app.use((req, res, next) => {
    res.locals.currentUser = req.user
    next()
  })

  

  // Base URLS
  app.use('/', require('./base.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/products', require('./product.routes'))
  app.use('/admin', require('./admin.routes'))
  app.use('/client', require('./client.routes'))
  app.use('/files', require('./upload.routes'))
}