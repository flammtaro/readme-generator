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
            choices: ['MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
            'Apache 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
             'CC0 [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/',
              'BSD 3-Clause [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'],
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your GitHub profile URL?',
            name: 'githuburl',
        },
        {
            type: 'input',
            message: 'What is your e-mail address?',
            name: 'email',
        }

    ]);
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile()

// }
//This a function to generate the ReadMe based upon the user inputs above
const generateReadme = ({title, description, installation, usage, contributing, license, username, githuburl, email}) =>
`# ${title}

## Description
${description}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [License](#License)
- [Questions](#Questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributions
${contributing}

## Questions
- Github: [${username}](${githuburl})
- E-mail: ${email}
`;


// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => fs.writeFileSync('README.md', generateReadme(answers)))
    .then(() => console.log("Successfully created ReadMe"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
