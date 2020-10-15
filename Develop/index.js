// require fs 
const fs = require("fs");

// // instsall inquirer package
const inquirer = require("inquirer");
const markdown = require ("../Develop/utils/generateMarkdown");



// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What is your README Title?",
//       name: "title"
//     },
//       {
//         type: "input",
//         message: "Installation:",
//         name: "installation"
//       },
//       {
//         type: "input",
//         message: "Usage:",
//         name: "usage"
//       },
//     //   make this a list
//       {
//         type: "input",
//         message: "License:",
//         name: "license"
//       },
//       {
//         type: "input",
//         message: "Contributing:",
//         name: "contributing"
//       },
//       {
//         type: "input",
//         message: "Tests:",
//         name: "tests"
//       },
//       {
//         type: "input",
//         message: "Questions:",
//         name: "questions"
//       },
//   ])
//   .then(function(response) {
//     console.log(response);
//     console.log(response.title);
//     console.log(response.description);
//     console.log(response.toc);
//     console.log(response.installation);
//     console.log(response.usage);
//     console.log(response.license);
//     console.log(response.contributing);
//     console.log(response.tests);
//     console.log(response.questions);
//     newTitle = response.title;
//     description=response.description;
//     init();
//   });

// // array of questions for user
const questions = [
    {
      type: "input",
      message: "What is your README Title?",
      name: "title"
    },
      {
        type: "input",
        message: "Installation:",
        name: "installation"
      },
      {
        type: "input",
        message: "Usage:",
        name: "usage"
      },
    //   make this a list
      {
        type: "input",
        message: "License:",
        name: "license"
      },
      {
        type: "input",
        message: "Contributing:",
        name: "contributing"
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
            console.log(response);
            console.log(response.title);
            console.log(response.description);
            console.log(response.toc);
            console.log(response.installation);
            console.log(response.usage);
            console.log(response.license);
            console.log(response.contributing);
            console.log(response.tests);
            console.log(response.questions);
            console.log("thisisaninit");
            writeToFile("readme.md", markdown(response));

          });
        
}

// // function call to initialize program

init()