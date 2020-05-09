const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const simpleGit = require('simple-git')(answers);

const writeReadMe = util.promisify(fs.writeReadMe);

// Wrong place for this.kk
//     const util = require('util');
// const fs = require('fs');

// const stat = util.promisify(fs.stat);
// stat('.').then((stats) => {
//   // Do something with `stats`
// }).catch((error) => {
//   // Handle the error.
// });

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
      type: "inpu0t",
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
      message: "Enter yuor Github Email?"
    }      
  ]); 
}


function generateReadme(answers) {
    return `
        # ${answers.Project-Title}

        ####${answers.Project-Description}.</h4>

        ####${answers.Table-of-contents}.</h4>

        * ${answers.Contributers}</li>

        * ${answers.License}</li>

        * ${answers.github}</li>
      
        * ${answers.Github-Email}</li>;
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

