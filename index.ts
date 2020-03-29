console.log('Hello world');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o andar que voce gostaria de visitar:', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Encaminhando voce para  ${answer} neste exato momento.`);

  rl.close();
});