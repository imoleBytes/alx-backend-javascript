const fs = require('fs');
const express = require('express');

function countStudents(path) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      }
      const lines = data.toString().split('\n');
      for (let i = 0; i < lines.length; i += 1) {
        if (lines[i]) {
          length += 1;
          const field = lines[i].toString().split(',');
          if (Object.prototype.hasOwnProperty.call(students, field[3])) {
            students[field[3]].push(field[0]);
          } else {
            students[field[3]] = [field[0]];
          }
          if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
            fields[field[3]] += 1;
          } else {
            fields[field[3]] = 1;
          }
        }
      }
      const l = length - 1;

      let output = `Number of students: ${l}\n`;
      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
          output += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
        }
      }
      resolve(output);
    });
  });
}

// const app = http.createServer((req, res) => {
//   const { url } = req;
//   res.statusCode = 200;

//   if (url === '/') {
//     res.end('Hello Holberton School!');
//   } else if (url === '/students') {
//     res.write('This is the list of our students\n');
//     countStudents(process.argv[2].toString()).then((out) => {
//       const outstr = out.slice(0, -1);
//       res.end(outstr);
//     }).catch(() => {
//       res.statusCode = 404;
//       res.end('Cannot load the database');
//     });
//   }
// });

// app.listen(1245);

// module.exports = app;

const app = express();

const PORT = 1245;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  // res.write('This is the list of our students\n');
  countStudents(process.argv[2].toString()).then((out) => {
    const outstr = out.slice(0, -1);
    res.statusCode = 200;
    const ouput = ['This is the list of our students', outstr].join('\n');
    res.send(ouput);
  }).catch(() => {
    res.statusCode = 404;
    res.end('Cannot load the database');
  });
});
app.listen(PORT, () => {});

module.exports = app;
