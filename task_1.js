const readline = require('node:readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cost = 0;

process.stdin.on('end', () => { console.log(cost); process.exit(0); });

rl.on("line", (data) => {
    let array = data.split(" ").map((item) => +item);
    const [a, b, c, d] = array;
    if (d < b) cost = a; else 
    cost = (d - b) * c + a;    
})

