const inquirer = require("inquirer");
const fs = require("fs");

const makeReadMe = (response)=>
`# Name of Application
    ${response.name}
 ## Description 
 ${response.description}
 
 ## How to use the Application
    ${response.howTo}
## Screenshot
    ${response.imageURL ? response.imageURL : "N/A"}
## Purpose and Features of the Application
    ${response.features}
 ## Challenges Faced 
    ${response.challenges}
## Collaboraters
    ${response.collaboraters ? response.collaboraters : "N/A"}
 ## License 
    ${response.license}
 ### Created by ${response.createdBy}
 ` ;


inquirer
    .prompt([{
        type:"input",
        message:"What is the name of your Application or Project?",
        name: "name",
    },
    {
        type:"input",
        message:"Provide a short description of your application.",
        name: "description"
    },
    {
        type:"input",
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
        type:"list",
        message:"Do you want to include a license?",
        name:"license",
        choices:["MIT","Apache", "GNU","ISC", "None"]
    },
    {
        type:"input",
        message: "Who was this created by?",
        name:"createdBy"
    }
])
.then((response)=>{
    console.log(response)
    var readMeString = makeReadMe(response);
    fs.writeFile(`./${response.name}README.md`, readMeString, (err) =>  err ? console.error(err) : console.log('Commit logged!'));
    
})


//TO DO LIST:
    // if user doesnt answer question: either prompt them to answer or do if else statement to write N/A as input in the corresponding field
    //look into opening the editor as a type 
    // table of contents
    // license if yes: give badge and link to the license aggreement if no: return a string. 