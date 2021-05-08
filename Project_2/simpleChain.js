const SHA256 = require('crypto-js/sha256')

// Block class

class Block{
  constructor(data){
    this.hash = ""
 
    this.height = 0
   
    this.body = data
    this.time = 0
    this.previousBlockHash = ""
  }
}

// Blockchain Class

class Blockchain{
  constructor(){
    this.chain = [];
    this.addBlock(new Block("First block in the chain - Genesis"))
  }

  addBlock(newBlock){
    newBlock.height = this.chain.length;
    newBlock.time = new Date().getTime().toString().slice(0,-3);

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
bc.addBlock(new Block("block 2"))
console.log(bc)