module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('question', { 
        sno:{ 
            type:Sequelize.INTEGER,  
            autoIncrement:true, 
            allowNull:false, 
            primaryKey:true
        }, 
        heading:    { type:Sequelize.STRING, allowNull:false, length:1000 },
        question:   { type:Sequelize.STRING(1234) , allowNull:false },
        createdAt:   Sequelize.DATE, 
        updatedAt:   Sequelize.DATE,
    }) 
    
    return Question;
    };