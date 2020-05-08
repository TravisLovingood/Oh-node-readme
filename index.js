const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const writeReadMe = util.promisify(fs.writeFile);

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
      name: "Email",
      message: "Enter yuor Github Email?"
    }      
  ]); 
}


function generateReadme(answers) {
    return `
        <h1 class="display-4">My project name is ${answers.Project-Title}</h1>
        <p class="lead">The project description ${answers.Project-Description}.</p>
        <p class="lead">Table of Contents ${answers.Table-of-contents}.</p>
        <ul class="list-group">
            <li class="list-group-item">The contrabuters ${answers.Contributers}</li>
            <li class="list-group-item">My license is ${answers.License}</li>
        </ul>    
        <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${answers.github}</li>
            <li class="list-group-item">Github Email: ${answers.Email}</li>
        </ul>`;
}


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
