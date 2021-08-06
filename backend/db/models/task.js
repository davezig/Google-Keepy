'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      description: DataTypes.STRING,
      isComplete: DataTypes.BOOLEAN,
      position: DataTypes.INTEGER,
      keepId: DataTypes.INTEGER,
    },
    {}
  );
  Task.associate = function (models) {
    // associations can be defined here
    Task.belongsTo(models.Keep, { foreignKey: 'keepId' });
  };
  return Task;
};
