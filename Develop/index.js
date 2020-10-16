// require fs 
const fs = require("fs");

// // instsall inquirer package
const inquirer = require("inquirer");

// bring in markdown  module
const markdown = require("../Develop/utils/generateMarkdown");

// // array of questions for user
var questions = [
    {
      type: "input",
      message: "What is your README title?",
      name: "title"
    },
      {
        type: "input",
        message: "Enter installation information:",
        name: "installation"
      },
      {
        type: "input",
        message: "Enter usage information:",
        name: "usage"
      },
    //   make this a list
      {
        type: "list",
        name: "license",
        message: "Select license type:",
        choices: ["MIT","Apache 2.0","GPLv3","Unlicense","LGPLv3"]
      },
      {
        type: "input",
        message: "Enter contributors:",
        name: "contributors"
      },
      {
        type: "input",
        message: "Tests:",
        name: "tests"
      },
      {
        type: "input",
        message: "What is your GitHub Username?",
        name: "username"
      },
    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    },
    {
      type: "input",
      message: "Additional contact info/ways to be reached:",
      name: "additionalinfo"
    },
  ];
  // Add badges for licenses
  const licenseAndBadges = (license) => {
      if(license === "MIT") {
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      }
      else if (license === "Apache 2.0") {
          return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`; 
      }
      else if (license === "GPLv3") {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      }
      else if (license === "Unlicense") {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      }
      else if (license === "LGPLv3") {
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
}
  }
// // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
            
      });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function(response) {
          badge = licenseAndBadges(response.license);

            writeToFile("readme.md", markdown(response));

          });
        
}

// // function call to initialize program

init()