// require fs 
const fs = require("fs");

// // instsall inquirer package
const inquirer = require("inquirer");

// bring in markdown  module
const markdown = require("../Develop/utils/generateMarkdown");

// append these responses to questions section
var userInfo = [
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
]
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
    //   make this a list // import a badge?
      {
        type: "list",
        name: "license",
        message: "Select license type:",
        choices: ["copyleft","lpgl","MIT","permissive","proprietary","public"]
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
        message: "Questions:",
        name: "questions"
      },
  ];

// // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
      
        // console.log("Success!");
      
      });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function(response) {
            // console.log(response);
            // console.log(response.title);
            // console.log(response.description);
            // console.log(response.toc);
            // console.log(response.installation);
            // console.log(response.usage);
            // console.log(response.license);
            // console.log(response.contributing);
            // console.log(response.tests);
            // console.log(response.questions);
            // console.log("thisisaninit");
            writeToFile("readme.md", markdown(response));

          });
        
}

// // function call to initialize program

init()