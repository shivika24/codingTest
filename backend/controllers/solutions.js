const Joi   = require('@hapi/joi');
const db    = require("../models");
const Solutions  = db.solutions;
const Questions = db.questions;

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
		res.status(400).send({
			code: -1,
			message: "Schema Structure is invalid"
		});
	}
  const email = req.body.email;
  try {
  //to find if solutions from the same user are already submitted or not
  let solution = await Solutions.findOne({ where: { email: email } });
  if(solution !== null) {
    //to send the response about already submitted solutions
    res.status(200).send({
      code: 0,
      message: "response already submitted"
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
        res.status(200).send({
          code: 2
        });
      }
  }
  }
  catch(err) {
    //if any error occured while executing any sql query
    res.status(500).send({
      code: 1,
      message: "Some error occurred while creating the Solution."
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
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving questions."
      });
    }
  }
