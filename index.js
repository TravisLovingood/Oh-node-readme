const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const simpleGit = require('simple-git')(answers);

const writeReadMe = util.promisify(fs.writeReadMe);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Project Title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "Project Description",
      message: "What is your project name?"
    },
    {
      type: "input",
      name: "Table of contents",
      message: "Add a table of contents"
    },
    {
      type: "input",
      name: "Contributors",
      message: "List Contributors?"
    },
    {
      type: "input",
      name: "License",
      message: "License?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "Github Email",
      message: "Enter your Github Email?"
    }      
  ]); 
}


function generateReadme(answers) {
    return `
        # ${answers.Project-Title}

        ####${answers.Project-Description}

        ####${answers.Table-of-contents}

        * ${answers.Contributers}

        * ${answers.License}

        * ${answers.github}
      
        * ${answers.Github-Email}
`}


promptuser()
    .then(function(answers) {
        const readme = generateReadMe(answers)

        return writeReadMe("README.md")
    })
    .then(function() {
        console.log("Success!");    
    })
    .catch(function(err) {
        console.log(err);
    });

