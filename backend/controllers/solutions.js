const Joi   = require('@hapi/joi');
const db    = require("../models");
const Book  = db.solutions;
const Questions = db.questions;
const solutionValidation = data => {
    const schema=Joi.object({
        email                           : Joi.string().required(),
        name                            : Joi.string().required(),
        solution1                       : Joi.string().required(),
        solution2                       : Joi.string().required(),
    });
    return schema.validate(data);
}
exports.add = async function(req, res){ 
    const {error} = solutionValidation(req.body)
    if (error) {
      res.status(400).send({
        code:-1,
        message: "Schema Structure is invalid"
      });
    }
    const email = req.body.email;
    Book.findByPk(email)
      .then(data => {
        if(data.email===req.body.email)
        {
        res.status(200).send({
          code:0,
          message: "response already submitted"
        });
        }
      });
  
    // Create a Solution entry
    const solution = {
      email:       req.body.email,
      name:        req.body.name,
      solution1:   req.body.solution1,
      solution2:   req.body.solution2
    };
  
    // Save Solutions in the database
    Book.create(solution)
      .then(data => {
        res.status(200).send({
          code:2
        });
      })
      .catch(err => {
        res.status(500).send({
          code:1,
          message: "Some error occurred while creating the Solution."
        });
      });
  };
  exports.getQuestions = (req, res) => {
    Questions.findAll({})
      .then(data => {
        res.send({questions:data});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  }
