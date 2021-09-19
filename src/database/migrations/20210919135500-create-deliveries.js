'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('deliveries', { 
     id: {
       type: Sequelize.INTEGER,
       primaryKey:true,
       autoIncrement: true,
       allowNull:false,
     },
     name:{
       type: Sequelize.STRING,
       allowNull:false
     },
     street:{
       type:Sequelize.STRING,
       allowNull:false
     },
     city:{
      type:Sequelize.STRING,
      allowNull:false
     },
     state:{
      type:Sequelize.STRING,
      allowNull:false
     },
     country:{
       type:Sequelize.STRING,
       allowNull:false
     },
     weight:{
      type:Sequelize.STRING,
      allowNull:false
     },
     latitude:{
      type:Sequelize.STRING,
      allowNull:false
     },
     longitude:{
      type:Sequelize.STRING,
      allowNull:false
     },
     created_at:{
       type:Sequelize.DATE,
       allowNull:false
     },
     updated_at:{
       type:Sequelize.DATE,
       allowNull:false
     }
     
     
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('deliveries');

  }
};
