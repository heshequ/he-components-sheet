var _ = require('lodash')
var success = require('./sheet/success')
var args = require('./sheet/args')
var logic = require('./sheet/logic')
var router = require('./sheet/router')
var auth = require('./sheet/auth')
var upload = require('./sheet/upload')

/**
 * 合并sheet
 */
module.exports = _.merge(success, args, logic, router, auth, upload)