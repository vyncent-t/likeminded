const express = require('express')
const cliqueRoutes = require('./clique')
const userRoutes = require('./user')
const eventRoutes = require('./event')
const planRoutes = require('./plan')
const commentRoutes = require('./comment')




module.exports = [cliqueRoutes, userRoutes, eventRoutes, planRoutes, commentRoutes]
// module.exports = userRoutes
