const BlockChain = require("./blockchain");

const blockchain = new BlockChain();

blockchain.addBlock({ data: "inital" });

console.log("first block", blockchain.chain[blockchain.chain.length - 1]);

let prevTimeStamp, nextTimestamp, nextBlock, timeDiff, average;

const times = [];

for (let i = 0; i < 10000; i++) {
  prevTimeStamp = blockchain.chain[blockchain.chain.length - 1].timestamp;

  blockchain.addBlock({ data: `block ${i}` });
  nextBlock = blockchain.chain[blockchain.chain.length - 1];

  nextTimestamp = nextBlock.timestamp;
  timeDiff = nextTimestamp - prevTimeStamp;
  times.push(timeDiff);

  average = times.reduce((total, num) => total + num) / times.length;
}
