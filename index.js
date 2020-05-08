const inquirer = require("inquirer");
;

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


    
}

promptuser()
    .then(function(answers) {
        const readme = generateReadMe(awnsers)
                        // Need to fill in where the return goes!!!
        return writeReadMe(readme)
    })
    .then(function() {
        console.log("Success!");    
    })
    .catch(function(err) {
        console.log(err);
    })


