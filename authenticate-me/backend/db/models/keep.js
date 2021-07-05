'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keep = sequelize.define(
    'Keep',
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Keep.associate = function (models) {
    // associations can be defined here
    Keep.belongsTo(models.User, { foreignKey: 'userId' });
    Keep.hasMany(models.Task, { foreignKey: 'keepId' });
  };
  return Keep;
};
