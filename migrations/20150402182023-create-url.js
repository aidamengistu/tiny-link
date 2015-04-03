"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("urls", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      longURL: {
        type: DataTypes.STRING
      },
      shortURL: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("urls").done(done);
  }
};