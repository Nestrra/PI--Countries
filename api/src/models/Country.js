const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

  sequelize.define('country', {


    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type: DataTypes.STRING,

    },
    area:{
      type: DataTypes.REAL,

    },
    population:{
      type: DataTypes.INTEGER,
    }
  });
};

