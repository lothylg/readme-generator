const inquirer = require("inquirer");
const {writeFile} = require('fs');
const {getQuestions} = require("./questions")
const {generateHtml} = require("./html")
const questions = getQuestions();


async function start(){
    const responses = await inquirer.prompt(questions)
    const readme = generateHtml(responses);

  
    writeFile("README.md", `${readme}`, (err) => {
      if( err ){
        console.error("There was an error writing the file.")
      } else {
        console.log("File written successfully!")
      }
    })
  }
  start();