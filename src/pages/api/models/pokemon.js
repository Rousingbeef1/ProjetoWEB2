module.exports = (sequelize, Sequelize) => {
    const Pokemon = sequelize.define("pokemon", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING, 
            allowNull: false
        },
        sprite: {
            type: Sequelize.STRING, 
            allowNull: false
        }
    });
    return Pokemon
}