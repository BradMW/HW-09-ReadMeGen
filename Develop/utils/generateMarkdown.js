// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseString = ""

      if(license === "MIT") {
        licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      };

      if(license === "Apache") {
        licenseString = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
            };

      if(license === "PDDL") {
        licenseString = `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`
      };
     
      if(license === "MPL") {
        licenseString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      };

      return licenseString
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_name}

 ## Description
  ${data.project_info}

 ## Table of Contents
  - [Insallation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

 ## Installation
  ${data.installation}

 ## Usage
  ${data.usage}

 ## Credits
  [${data.credits}](https://github.com/${data.credits})

 ## License
  ${renderLicenseBadge(data.license)}

 ## Features
  ${data.features}

  



`;
}

module.exports = generateMarkdown;
