// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseIcon =  "";
var licenseURL ="";
function renderLicenseBadge(license) { 
    if (license === "MIT"){
        licenseIcon = `![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`;       
   }
    else if (license === "Apache"){
     licenseIcon = `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
   //   licenseURL = `[Apache](https://opensource.org/licenses/Apache-2.0)`;

   }
    else if (license === "GNU"){
     licenseIcon =`![License: GPL-v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
       // licenseURL= `(https://www.gnu.org/licenses/gpl-3.0)`;

   }
    else if (license === "ISC"){
        licenseIcon = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
       
       // licenseURL= `(https://opensource.org/licenses/ISC)`;

   } else {
         licenseIcon= " ";
   }
   return licenseIcon;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    if (license === "MIT"){
        licenseURL = `![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`;       
   }
    else if (license === "Apache"){
          licenseURL = `[Apache](https://opensource.org/licenses/Apache-2.0)`;
   }
    else if (license === "GNU"){
       licenseURL= `(https://www.gnu.org/licenses/gpl-3.0)`;
   }
    else if (license === "ISC"){
       licenseURL= `(https://opensource.org/licenses/ISC)`;
}   else if (license ==="None"){
    licenseURL= "";
}
    return licenseURL;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
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
  This project is covered by the license of: ${renderLicenseLink(response.license)}. 
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