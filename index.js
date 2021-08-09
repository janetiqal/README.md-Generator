const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
//put the prompt questions inside the questions array. 
const questions = [{
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
    message: "Include the link to the demo video.",
    name: "demo"
},
{//users can override the default image by putting in whatever link or path. 
    type: "input",
    message: "Include a screenshot of the working application.",
    name: "imageURL",
    default: "./images/SCReadme1.png"
},
{
    type: "confirm",
    message: "Do you want to include another screenshot?",
    name: "imageURL2",
},
{//asks the user if they want to add another screenshot to their readme. 
    type: "input",
    message:"Insert next screenshot url or path",
    name:"confirmimageURL2",
    default: "./images/SCReadme2.png",
    when: response => response.imageURL2 === true,
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
}];

//function to initiliaze the program. 
function init (){
    inquirer.prompt(questions)
    .then((response) => {
        //bc the second screenshot is a question and returns boolean i created an if else statement, if true a new img tag is created, else it is blank.
        if(response.imageURL2 === true){
            response.confirmimageURL2 =`<img src="${response.confirmimageURL2}" alt="screenshot of application"/>`
        }else {
            response.confirmimageURL2 ="";
        }
        writeToFile(response)
    })
};
//this function writes the MD file 
function writeToFile(response) {
    fs.writeFile(`./${response.name}README.md`,generateMarkdown(response) , (err) => err ? console.error(err) : console.log('MD file created'));
}

//calling the function to initiliaze the program
init();

