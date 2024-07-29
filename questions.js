


function getQuestions(){
    return [
      {
        type: "input",
        message: "What is the title of your project?",
        name: "projTitle"
      },
      {
        type: "input",
        message: "Provide a description of your project?",
        name: "description"
      },
      {
        type: "input",
        message: "Provide installation detail?",
        name: "installation"
      },
      {
        type: "input",
        message: "How will this be used?",
        name: "usage"
      },
      {
        type: "input",
        message: "Detail the contribution guidelines",
        name: "contribution"
      },
      {
        type: "input",
        message: "Provide test instruction",
        name: "test"
      },
      {
        type: "list",
        message: "Which license will you be?",
        name: "animal",
        choices: [ "dog", "cat", "sloth", "capybara" ]
      }
    ]
  }
  module.exports = {
    getQuestions: getQuestions
  }