const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([{
        type:"input",
        message:"What is the name of your Application or Project?",
        name: "name"
    },
    {
        type:"input",
        message:"Provide a short description of your application.",
        name: "description"
    },
    {
        type:"editor",
        message:"Describe how to use the app",
        name:"howTo"
    },
    {
        type:"input",
        message:"Include a screenshot of the working application.",
        name:"imageURL"
    },
    {
        type:"input",
        message:"Describe the purpose of this app and features of the app",
        name:"features"
    },
    {
        type:"input",
        message:"Did you face any challenges with creating this project?",
        name:"challenges"
    },
    {
        type:"input",
        message:"List your collaboraters",
        name:"credits"
    },
    {
        type:"checkbox",
        message:"Do you want to include a license?",
        name:"license",
        choices:["MIT","Apache", "GNU","ISC", "None"]
    },
])
.then((response)=>{
    console.log(response)
})


// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions