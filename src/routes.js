const express = require('express');

const DeliveriesControllers = require('./controllers/DeliveriesControllers')

const routes = express.Router();

routes.post('/deliveries', DeliveriesControllers.store)

routes.get('/deliveries', DeliveriesControllers.index)

routes.delete('/deliveries', DeliveriesControllers.delete)


module.exports = routes