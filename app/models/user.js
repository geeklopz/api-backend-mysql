const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    // Hooks
    { 
      hooks: {
        afterValidate: user => {
          user.password = bcrypt.hashSync(user.password, 8)
        }
      }
    });
  
    return User;
  }