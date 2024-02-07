const fs = require('fs');

fs.readFile('tests.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const tests = JSON.parse(data);
    console.log(tests);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
