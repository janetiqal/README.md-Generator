const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")



// const makeReadMe = (response) =>{
//  let licenseIcon = renderLicenseBadge(response.license);
//  let licenseURL = renderLicenseBadge(response.license);

//     return `${licenseIcon}
//     # ${response.name}

//  ## Description 
//  ${response.description}

//  ## Table of Contents
// - [Usage](#usage)
// - [Installation](#installation)
// - [Features](#features)
// - [Collaboraters](#collaboraters)
// - [License](#license)
// - [Tests](#tests)
// - [Contributing](#contributing)
// - [Questions](#questions)

// ## Installation
//     ${response.installation}
//  ## Usage
//     ${response.usage}
// ## Screenshot
//   ${response.imageURL}
// ## Features 
//     ${response.features}
// ## Collaboraters
//     ${response.collaboraters ? response.collaboraters : "N/A"}
// ## License 
//     This project is covered by the license of: [${licenseURL}](${response.license}). 
//     ${licenseURL}
// ## Badges 
// ## Tests
//     ${response.test ? response.test: "N/A"}
// ## Contributing 
//     ${response.contribute}
// ## Questions
//     If you have any questions or would like to discuss this application further, please reach out to me via email at ([${response.email}](mailto:${response.email})) or visit my github profile at [${response.userName}](http://www.github.com/${response.userName}).

// ### Created by ${response.createdBy}
//  `} ;
//function to initiliaze the program. 
function init (){
    inquirer.prompt([{
        type: "input",
        message: "What is the name of your Application or Project?",
        name: "name",
        validate: string => string.length > 0 ? true: "Must enter a project title."
    },
    {
        type: "input",
        message: "Provide a short description of your application.",
        name: "description",
        validate: string => string.length >= 15 ? true: "Must include a description longer than 15 characters"
    },
    {
        type: "input",
        message: "Describe how to use the app",
        name: "usage"
    },
    {
        type: "input",
        message: "Describe how to install the app",
        name: "installation"
    },
    {
        type: "input",
        message: "Include a screenshot of the working application.",
        name: "imageURL"
    },
    {
        type: "input",
        message: "Describe the purpose of this app and features of the app",
        name: "features"
    },
    {
        type: "input",
        message: "List your collaboraters",
        name: "credits"
    },
    {
        type: "input",
        message: "Describe how users can contribute to this application or project",
        name: "contribute"
    },
    {
        type: "list",
        message: "Do you want to include a license?",
        name: "license",
        choices: ["MIT", "Apache", "GNU", "ISC", "None"]
    },
    {
        type: "input",
        message: "Do you want to include tests in your README?",
        name: "test",
    },
    {
        type: "input",
        message:"Enter your github username",
        name:"userName",
        //github usernames are min. 4 char. long
        validate: string => string.length >= 4 ? true: "Your github username can not be less than 4 characters."

    },
    {
        type:"input",
        message:"Type in your email",
        name:"email",
        validate: string => string.length > 0 ? true: "You must include an email"
    },
    {
        type: "input",
        message: "Who was this created by?",
        name: "createdBy"
    }
    ])
    .then((response) => {
        writeToFile(response)
    })
};
//this function writes the MD file 
function writeToFile(response) {
    // var readMeString = generateMarkdown(response);
    fs.writeFile(`./${response.name}README.md`,generateMarkdown(response) , (err) => err ? console.error(err) : console.log('MD file created'));
}

//calling the function to initiliaze the program
init();

