// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
             message: 'What is the name of your project?',
             name: 'project_name',
            },
        {
         type: 'input',
          message: 'What is your user name?',
          name: 'username',
             },
        {
         type: 'input',
          message: 'What is this project about?',
          name: 'project_info',
             },
         {
         type: 'input',
          message: 'What are the steps to install your project?',
          name: 'installation',
             },
         {
          type: 'input',
          message: 'How can we use your project?',
          name: 'usage',
             },
               {
         type: 'input',
          message: 'What is your GitHub username?',
          name: 'credits',
             },
         {
          type: 'list',
          message: 'What license did you use?',
          name: 'license',
          choices: ['MIT', 'Apache', 'PDDL', 'MPL']
             },
                {
         type: 'input',
          message: 'What features does your project have?',
          name: 'features',
             },
            //return a response and use fs to append it
           
];

// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile(generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        fs.writeFileSync('./dist/generatedReadme.md', generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
