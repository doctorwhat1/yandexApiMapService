const typos = require('typos');
const fs = require('fs');
const path = require('path');

// Set the language and dictionary
typos.setLanguage('en_US');

// Define the files to check
const filesToCheck = ['index.html', 'about.html', 'contact.html'];

// Loop through each file
filesToCheck.forEach((file) => {
  const filePath = path.join(__dirname, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Check for spelling errors
  const errors = typos.check(fileContent);

  // Print the errors
  if (errors.length > 0) {
    console.error(`Spelling errors found in ${file}:`);
    errors.forEach((error) => {
      console.error(`  - ${error.message} at line ${error.line}`);
    });
    process.exit(1); // Exit with an error code
  } else {
    console.log(`No spelling errors found in ${file}`);
  }
});
