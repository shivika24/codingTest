module.exports = app => {
    const solutions = require("../controllers/solutions.js");  
    var router = require("express").Router();

    router.post("/addSolution", solutions.add);     
    router.get("/getQuestions", solutions.getQuestions);
    app.use('/api/solutions', router);
  }; 