// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${badge}
  ## Table of Contents
  * [ Installation ](#installation)
  * [ Usage ](#usage)
  * [ License ](#license)
  * [ Contributing ](#contributing)
  * [ Tests ](#tests)
  * [ Questions ](#questions)

### Installation
${data.installation}

### Usage
${data.usage}

### License
${data.license}

### Contributing
${data.contributing}

### Tests
${data.tests}

### Questions
${data.username}
${data.email}
${data.additionalinfo}

`;
}

module.exports = generateMarkdown;
