// require fs 
var fs = require("fs");

// // instsall inquirer package
var inquirer = require("inquirer");
var newTitle= "hi";
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your README Title?",
      name: "title"
    },
  ])
  .then(function(response) {
    console.log(response);
    console.log(response.title);
    newTitle = response.title;
    init();
  });

// // array of questions for user
const questions = [

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
    console.log("thisisaninit");
    console.log(newTitle);
    writeToFile("readme.md", newTitle);
}

// // function call to initialize program

