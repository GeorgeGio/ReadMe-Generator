import inquirer from "inquirer";
import fs from "fs/promises";


// let describe = lorem30;
let { project_title, description, installation, usage, contributors,test, question1,question2, license } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'project_title',
            message: "What's your project's name",
        },
        {
            type: 'input',
            name: 'description',
            message: "Please give some Description of the project you created",
            default() {
                return "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde porro est quam nam suscipit hic maxime dignissimos, aliquid eius. Aperiam, vitae eum. Debitis, numquam pariatur! Quaerat quibusdam cumque necessitatibus cum!";
            },
        },
        {
            type: 'input',
            name: 'installation',
            message: "What you need to do for installing the project",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Explain how to use the project",
        },
        {
            type: 'input',
            name: 'contributors',
            message: "State if you received any aid from another developer",
        },
        {
            type: 'input',
            name: 'test',
            message: "What's tests did you carry out",
        },
        {
            type: 'input',
            name: 'question1',
            message: "If you have any questions give your GitHub link ",
        },
        {
            type: 'input',
            name: 'question2',
            message: "If you want a reply please give your email ",
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
 * [License](#license)
 * [Contributors](#contributors)

## Installation
${installation}

## Usage 
${usage}

# Contributors
${contributors}

# Tests
${test}

# Questions
All questions should refer to : ${question1} and email to: ${question2}

## License

### License
${licenseGenerator(license)}
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

