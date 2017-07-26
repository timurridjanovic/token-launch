'use strict'

const pagesRouter = require('./pages')

module.exports = {
  start: function (app) {
    pagesRouter.init(app)
  }
}
