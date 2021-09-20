const express = require ('express');
const routes = require('./routes');
const cors = require('cors')

require('./database')

const app =express();

app.use(cors())
app.use(express.json());

app.use(routes)

app.use((err, request, response, next) => {
  if(err instanceof Error){
    return response.status(400).json({
      error:err.message
    })
  }
})

app.listen(3333, ()=> console.log("Server is Running"))