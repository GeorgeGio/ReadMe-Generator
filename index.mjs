import inquirer from "inquirer";
import fs from "fs/promises";


// let describe = lorem30;
let { project_title, description, license } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'project_title',
            message: "What's your project's name",
        },
        {
            type: 'input',
            name: 'description',
            message: "What's your last name",
            default() {
                return lorem20;
            },
        },
        {
            type: 'list',
            name: 'License',
            message: "What License you want to use",
            choices: ["MIT", "Apache", "Boost", "Eclipse", "IBM"],
            //     default() {
            //         return 'Doe';
            //     },
        }

    ]);

// markdown 
console.log(project_title);


const testReadme =
    `
# Project Title - ${project_title}




## Description 
 - ${description}

## Table of Contents 
 * [Installation](#installation)
 * [Usage](#usage)

## Installation

## Usage 

## License

### License
${licenseGenerator(license)}

# Contributing 

# Tests

# Questions 
`

await fs.writeFile("README.md", testReadme);

function licenseGenerator(params) {

    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (license === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (license === "Boost") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }
    else if (license === "Eclipse") {
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }
    else {
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    }

}

// let liv = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

