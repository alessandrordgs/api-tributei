const {Model, DataTypes} = require('sequelize');

class Deliveries extends Model {
  static init(connection){
    super.init({
     name:DataTypes.STRING,
     street:DataTypes.STRING,
     city:DataTypes.STRING,
     state:DataTypes.STRING,
     country:DataTypes.STRING,
     weight:DataTypes.STRING,
     latitude:DataTypes.STRING,
     longitude:DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }
}

module.exports = Deliveries