//для ввода из стандартного потока
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let res;

rl.on('line', (inputItem) => {});

rl.on('close', () => {
  console.log(res);
  process.exit(0);
});
