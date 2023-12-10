const readline = require('node:readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let move = 0;

process.stdin.on('end', () => { console.log(cost); process.exit(0); });

rl.on("line", (data) => {
 const count = +data;
 move = Math.round(count /2); 
})
