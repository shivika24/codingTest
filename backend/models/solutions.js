module.exports = (sequelize, Sequelize) => {
    //solutions db schema
    const Solution = sequelize.define('solution', { 
        id:          { type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
        email:       { type: Sequelize.STRING, allowNull:false, length:50, unique:true }, 
        name:        { type:Sequelize.STRING, allowNull:false, length:20 },
        solution1:   { type: Sequelize.TEXT, allowNull:false, limit:2000 },
        solution2:   { type: Sequelize.TEXT, allowNull:false }, 
        myDate:      { type: Sequelize.DATE,defaultValue: Sequelize.NOW }, 
        createdAt:   Sequelize.DATE, 
        updatedAt:   Sequelize.DATE,  
    }) 
    
    return Solution;
    };