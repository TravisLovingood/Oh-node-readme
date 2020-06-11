const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const path= require("path")
const writeFile = util.promisify(fs.writeFile);


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
      name: "license",
      message: "license?"
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

        * ${answers.license}

        * ${answers.github}
      
        * ${answers.GithubEmail}
`}
  function init() {
   promptUser().then((inquirerResponses)=>{
        writeFile("README.md", generateMarkdown({ ...inquirerResponses}))
    })
  
    .then(function(){
        console.log("success")
    })

    .catch(function(err){
        console.log(err)
    })

}
init();