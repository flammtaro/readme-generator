// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'How would you describe this project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the instructions to install this application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How does one use this application?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?',
        },
        {
            type: 'list',
            message: 'What license are you using for this project?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GLPv2', 'BSD 3-clause'],
        },
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your e-mail address?',
            name: 'email',
        }
        .then(answers =>
            {
                // write
            })


    ]);
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile()

// }
const generateReadme = ({}) =>
''
;

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => fs.writeFile('README.md', generateReadme(answers)))
    .then(() => console.log("Successfully created ReadME"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
