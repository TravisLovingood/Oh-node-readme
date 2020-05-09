const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
      type: "inpu0t",
      name: "Table of contents",
      message: "Add a table of contents"
    },
    {
      type: "input",
      name: "Contributors",
      message: "List Contributors?"
    }
    {
      type: "input",
      name: "License",
      message: "License?"
    }
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    }
    {
      type: "input",
      name: "Github Email",
      message: "Enter yuor Github Email?"
    }      
  ]); 
}


function generateReadme(answers) {
    return `
        # This is an <h1> tag ${answers.Project-Title}</h1>

        #### This is an <h4> tag ${answers.Project-Description}.</h4>

        #### This is an <h4> tag ${answers.Table-of-contents}.</h4>

        * Item 1<li class="list-group-item">The contrabuters ${answers.Contributers}</li>

        * Item 2<li class="list-group-item">My license is ${answers.License}</li>

        * Item 1<li class="list-group-item">My GitHub username is ${answers.github}</li>
      
        * Item 2<li class="list-group-item">Github Email: ${answers.Github-Email}</li>;
`}


promptuser()
    .then(function(answers) {
        const readme = generateReadMe(awnsers)

        return writeReadMe("README.md")
    })
    .then(function() {
        console.log("Success!");    
    })
    .catch(function(err) {
        console.log(err);
    });

