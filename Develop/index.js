// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    inquirer
     .prompt([
        {
         type: 'input',
          message: 'What is your user name?',
          name: 'username',
         },
        {
         type: 'input',
          message: 'What is your user name?',
          name: 'username',
         },
         {
         type: 'input',
          message: 'What is your user name?',
          name: 'username',
         },
        ])
            //return a response and use fs to append it
            .then((data) => {
                console.log(data)
            })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
