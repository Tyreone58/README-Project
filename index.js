// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "What are the steps to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions for usage",
        name: "usage",
    },
    {
        type: "list",
        message: "Select the type of license used",
        name: "license",
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "None", 
        ]
    },
    {
        type: "input",
        message: "contributors?",
        name: "contributors",
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "test"
    },
    
    {
        type: "input",
        message: "Contact info for further questions",
        name: "questions"
    },
    {
        type: "input",
        message: "Your Github username",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        err ? console.error(err) : console.log('File Created!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer) => {
        console.log("User input collected, generating README...");
        const data = generateMarkdown(answer);
        writeToFile("./utils/README.md", data)
    });
}

// Function call to initialize app
init();
