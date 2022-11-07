const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));
stdout.write('Hi, type some text bellow!\n');
stdin.on('data', (data) => {
  if(data.toString().trim() === 'exit'){
    process.exit();
  }

  // let temp = data.toString();
  // temp = temp.slice(0, temp.length - 1);
  // console.log('temp - ' + temp + ', длинна - ' + temp.length + ', тип - ' + typeof(temp));
  // if(temp === 'exit') {
  //   console.log('exit!!!!!!');
  // }

  output.write(data)
});
process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write("That was fun! Have a good day!\n"));

