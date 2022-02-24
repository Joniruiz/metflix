
module.exports= (sequelize,DataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: DataTypes.INTEGER(255).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false
        },
        synopsis:{
            type: DataTypes.TEXT(),
            allowNull:false
        },
        genre_id: {
            type: DataTypes.INTEGER(255),
            allowNull:false
        },
        image_movie: {
            type: DataTypes.STRING,
        }
    }
    let config = {
        tableName: 'movies',
        timeStamps: false
    }
    const Movie = sequelize.define(alias,cols,config)

    Movie.associate = models => {
        Movie.belongsTo(models.Genre,{
            alias:'genres',
            foreignKey:'genre_id'
        })
    }
    
    return Movie;
}