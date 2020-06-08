function generateProjectUrl(github, ProjectTitle) {
  const kebabCaseTitle = ProjectTitle.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, ProjectTitle) {
  if (license !== "None") {
    return `[![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)](${generateProjectUrl(github, ProjectTitle)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} License.`
    )
  }
  return ''
}

function generateMarkdown(data) { 
  console.log(data)
  return `
# ${data.ProjectTitle}
${renderLicenseBadge(data.license, data.github, data.ProjectTitle)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

<img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />

If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
