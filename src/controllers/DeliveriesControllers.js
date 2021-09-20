const Deliveries = require('../models/Deliveries')

module.exports = {

  async index(request, response){
    const deliveries = await Deliveries.findAll();

    return response.json(deliveries)
  },

  async store(request, response){
   const {
    name,
    street,
    city,
    state,
    country,
    weight,
    latitude,
    longitude
  } = request.body


    const deliveries = await Deliveries.create({
      name,
      street,
      city,
      state,
      country,
      latitude,
      weight,
      longitude
    })
      return response.json(deliveries)
  },

  async delete(request, response){
     
     await Deliveries.destroy({
       where:{},
       truncate:true
     }) 

      return response.json({
        message:"Os Registros foram deletados"
      })
}

}