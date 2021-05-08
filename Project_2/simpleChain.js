const SHA256 = require('crypto-js/sha256')

// Block class

class Block{
  constructor(data){
    this.hash = ""
 
    this.height = 0
   
    this.body = data
    this.time = 0
    this.previousblockhash = ""
  }
}

// Blockchain Class

class Blockchain{
  constructor(){
    this.chain = [];
    this.addBlock(new Block("First block in the chain - Genesis"))
  }

  addBlock(newBlock){
    if(this.chain.length > 0){
      newBlock.previousBlockHash = this.chain[this.chain.length-1].hash;
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString()
    this.chain.push(newBlock);
  }
}

const bc = new Blockchain()
const blk = new Block("Hello Block Chain!")

bc.addBlock(blk)

console.log(bc)