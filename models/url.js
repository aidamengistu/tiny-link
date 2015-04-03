"use strict";
module.exports = function(sequelize, DataTypes) {
  var url = sequelize.define("url", {
    longURL: DataTypes.STRING,
    shortURL: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return url;
};