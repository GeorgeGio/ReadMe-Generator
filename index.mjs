import inquirer from "inquirer";
import fs from "fs/promises";

let { first_name, last_name,license } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What's your first name",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What's your last name",
            default() {
                return 'Doe';
            },
        },
        {
            type: 'list',
            name: 'License',
            message: "What License you want to use",
            choices: ["MIT",""],
        //     default() {
        //         return 'Doe';
        //     },
        }

    ]);

// markdown 
console.log(first_name, last_name);


const testReadme =
    `
# title ${first_name}

## heading
${last_name}

# Description 

# Table of Contents 

# Installation

# Usage 

# License

### License
${license}

# Contributing 

# Tests

# Questions 
`

await fs.writeFile("README.md", testReadme);