const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389,'OIUOEREDHKHKD','78s97d4x6dsf'); //임의의 값을 넣어서 새로운 블록 생성
bitcoin.createNewBlock(2464,'WAEHGOWAEWGEW','8awe9gwe9beb'); //임의의 값을 넣어서 새로운 블록 생성
bitcoin.createNewBlock(6489,'IEBEBIEBWOBEZ','3g32ogi23ob3'); //임의의 값을 넣어서 새로운 블록 생성

console.log(bitcoin)