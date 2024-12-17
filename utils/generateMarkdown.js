// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  }
  return `[![license](https://img.shields.io/badge/License-${encodeURIComponent(license)}-red)](${renderLicenseLink(license)})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/license/mit';
  }
  if (license === 'Apache 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  }
  if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }
return `This repository uses the [${license}](${renderLicenseLink(license)}) license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation:
You must install the following for this app to function:
${data.installation}

## Usage:
${data.usage}

## License:
${renderLicenseSection(data.license)}

## Contributors:
${data.contributors}

## Tests:
Run the following commands in your terminal to test this app:
\`\`\`
${data.test}
\`\`\`

## Questions:
If you have any questions, you may contact me at either
Github: https://github.com/${data.username}
or
Email: ${data.email}

`;
}

export default generateMarkdown;
