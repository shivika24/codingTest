module.exports = (sequelize, Sequelize) => {
    const Solution = sequelize.define('solution', { 
        email:       { type: Sequelize.STRING, allowNull:false, length:50, primaryKey:true }, 
        name:        { type:Sequelize.STRING, allowNull:false, length:20 },
        solution1:   { type: Sequelize.STRING, allowNull:false, length:1000 },
        solution2:   { type: Sequelize.STRING, allowNull:false, length:1000 },
        myDate:      { type: Sequelize.DATE,defaultValue: Sequelize.NOW }, 
        createdAt:   Sequelize.DATE, 
        updatedAt:   Sequelize.DATE, 
    }) 
    
    return Solution;
    };