const express = require('express');

const DeliveriesControllers = require('./controllers/DeliveriesControllers')

const routes = express.Router();

routes.post('/deliveries', DeliveriesControllers.store)

routes.get('/deliveries', DeliveriesControllers.index)



routes.get('/', (req,res) => {
  return res.json({
    message: "Hello World"
  })
})

module.exports = routes