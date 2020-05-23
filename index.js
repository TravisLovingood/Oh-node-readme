const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const answers = undefined
const simpleGit = require('simple-git')(answers);
const util = require("util");
const writeReadMe = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "ProjectTitle",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "ProjectDescription",
      message: "What is your project name?"
    },
    {
      type: "input",
      name: "TableOfContents",
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
      name: "GithubEmail",
      message: "Enter your Github Email?"
    }      
  ]); 
}


function generateReadMe(answers) {
    return `
        # ${answers.ProjectTitle}

        ####${answers.ProjectDescription}

        ####${answers.TableOfContents}

        * ${answers.Contributers}

        * ${answers.License}

        * ${answers.github}
      
        * ${answers.GithubEmail}
`}


promptUser()
    .then(function(answers) {
        // const readme = generateReadMe(answers)
        const readme = "string todo"
        return writeFile("README.md")
    })
    .then(function() {
        console.log("Success!");    
    })
    .catch(function(err) {
        console.log(err);
    });

