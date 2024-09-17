console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('data', (INPUT) => {
    process.stdout.write(`Your name is: ${INPUT.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (INPUT) => {
    process.stdout.write(`Your name is: ${INPUT.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}
