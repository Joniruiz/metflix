module.exports = (sequelize, DataTypes) =>{
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER(255),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        }

    }
    let config = {
        tableName: 'users',
        timeStamps: false
    }

    const User = sequelize.define(alias,cols,config)

    return User
}