const readline = require('node:readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let max = 0;

rl.question('Enter quantity number on paper n and quantity attempts k: ' , input1 => {
    rl.question('Enter number on paper: ', input2 => {
        const [countNumber, attempts] = input1.split(' ').map(Number);
        const numberPaper = input2.split(" ").map(Number);       
        const currentSum = numberPaper.reduce((acc, number) => acc + number, 0);
        const sortByIncrease = numberPaper.sort((a, b) => a-b);
        const arr = sortByIncrease.map((item) => item.toString().length);        
        const copyArr = arr.concat();  
        let maxPlaceNumber = copyArr.sort((a, b) => b - a)[0];             
        let indexMinOfMaxNumber = arr.indexOf(maxPlaceNumber);
        if (sortByIncrease.length - indexMinOfMaxNumber < attempts )
        indexMinOfMaxNumber = indexMinOfMaxNumber - (attempts - indexMinOfMaxNumber)
        if (indexMinOfMaxNumber < 0) indexMinOfMaxNumber = 0;
        for (let i = 0; i < attempts; i++) {
          if (indexMinOfMaxNumber >= countNumber) break;
           let arrOfNumber = sortByIncrease[indexMinOfMaxNumber].toString().split('').map(Number);           
           for(let j = 0; j < arrOfNumber.length; j++) {
            if (arrOfNumber[j] < 9 ) {                
                arrOfNumber[j] = 9;
                let change = Number(arrOfNumber.join(""));
                sortByIncrease[indexMinOfMaxNumber] = change;
                break;                
            }
           
        }
        
        indexMinOfMaxNumber++;
        
    }
  const newMax = sortByIncrease.reduce((acc, item) => acc + item, 0);
   max = newMax - currentSum;
   console.log(max);
       rl.close();
    });
});
