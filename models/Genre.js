module.exports = (sequelize, DataTypes) => {
    let alias = 'Genre';

    let cols ={
        id: {
            type: DataTypes.INTEGER(255),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        }
    }

    let config = {
        tableName='genres',
        timeStamps = false
    }

    const Genre = sequelize.define(alias,cols,config)

    Genre.associate = models => {
        Genre.hasMany(models.Movie,{
            as:'movies',
            foreignKey:'genre_id'
        })
    }

    return Genre;
}