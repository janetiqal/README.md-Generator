// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseIcon = "";
var licenseURL = "";
function renderLicenseBadge(license) { 
    if (license === "MIT"){
      licenseIcon = `![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`;       
   }
    else if (license === "Apache"){
      licenseIcon = `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
   }
    else if (license === "GNU"){
     licenseIcon =`![License: GPL-v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
   }
    else if (license === "ISC"){
        licenseIcon = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
   } 
   else {
         licenseIcon= " ";
   }
   return licenseIcon;
}

//returns the license link
function renderLicenseLink(license) { 
    if (license === "MIT"){
        licenseURL = `[MIT](https://opensource.org/licenses/MIT)`;       
   }
    else if (license === "Apache"){
          licenseURL = `[Apache](https://opensource.org/licenses/Apache-2.0)`;
   }
    else if (license === "GNU"){
       licenseURL= `[GNU](https://www.gnu.org/licenses/gpl-3.0)`;
   }
    else if (license === "ISC"){
       licenseURL= `[ISC](https://opensource.org/licenses/ISC)`;
} //instead of returning an empty string,if no license is used. A string saying no license used is placed in the license section of readme
 else if (license === "None"){
    return licenseURL = renderLicenseSection(license);
}//the statement isnt being returned, but the license URL is....?
    return "This project is covered by the license of: " + licenseURL;
};

// If there is no license, return a message saying so. 
function renderLicenseSection(license) {
    if (license ==="None"){
        return "No license was used."
    }
 }

// The function that generates markdown for README
function generateMarkdown(response) {

    renderLicenseBadge(response.license);
    renderLicenseLink(response.license);
    return ` ${response.name} </br></br>
    ${licenseIcon}
## Description 
${response.description}

## Table of Contents
- [Usage](#usage)
- [Installation](#installation)
- [Features](#features)
- [Collaboraters](#collaboraters)
- [License](#license)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
  ${response.installation}
## Usage
  ${response.usage}
## Screenshot
${response.imageURL}
## Features 
  ${response.features}
## Collaboraters
  ${response.collaboraters ? response.collaboraters : "N/A"}
## License 
  ${licenseURL}
## Badges 
## Tests
  ${response.test ? response.test : "N/A"}
## Contributing 
  ${response.contribute}
## Questions
  If you have any questions or would like to discuss this application further, please reach out to me via email at [${response.email}](mailto:${response.email}) or visit my github profile at [${response.userName}](http://www.github.com/${response.userName}).

### Created by ${response.createdBy}
`};



module.exports = generateMarkdown;