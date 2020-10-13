const Joi                = require('@hapi/joi');
const db                 = require("../models");
const messages           = require('../messages');
const constants          = require('../constants');
const Solutions          = db.solutions;
const Questions          = db.questions;

//schema validation for solution entry
const solutionValidation = data => {
    const schema=Joi.object({
        email                           : Joi.string().required(),
        name                            : Joi.string().required(),
        solution1                       : Joi.string().required(),
        solution2                       : Joi.string().required(),
    });
    return schema.validate(data);
}

//to add solution
exports.add = async function(req, res) {

  //to check data we are getting from the front end
	const { error } = solutionValidation(req.body);
	if (error) {
		res.status(constants.responseFlags.SCHEMA_STRUCTURE_INVALID).send({
			code: -1,
			message: messages.errorMessages.SCHEMA_STRUCTURE_INVALID
		});
	}
  const email = req.body.email;
  try {
  //to find if solutions from the same user are already submitted or not
  let solution = await Solutions.findOne({ where: { email: email } });
  if(solution !== null) {
    //to send the response about already submitted solutions
    res.status(constants.responseFlags.RESPONSE_ALREADY_SUBMITTED).send({
      code: 0,
      message: messages.errorMessages.RESPONSE_ALREADY_SUBMITTED
    });
  }
  else {
    //if solution for that user is not submitted then Create a Solution entry
			const solution = {
				email: req.body.email,
				name: req.body.name,
				solution1: req.body.solution1,
				solution2: req.body.solution2
			};

      // Save Solutions in the database
      let sol = await Solutions.create(solution)
      if(sol!==null) {
        res.status(constants.responseFlags.SOLUTIONS_ADDED).send({
          code: 2,
          message: messages.errorMessages.SOLUTIONS_ADDED
        });
      }
  }
  }
  catch(err) {
    //if any error occured while executing any sql query
    res.status(constants.responseFlags.ERROR_OCCURED).send({
      error:err,
      code: 1,
      message: messages.errorMessages.ERROR_OCCURED
    });
  }
  };

  //to get the questions stored from database
  exports.getQuestions = async (req, res) => {
    try {
      let questions = await Questions.findAll({});
      if(questions !== null) {
        res.send({questions:questions});
      }
    }
    catch(err) {
      res.status(constants.responseFlags.ERROR_OCCURED).send({
        error:err,
        message:
          err.message || messages.errorMessages.ERROR_OCCURED
      });
    }
  }
