class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    };
}

const genesisBlock: Block = new Block(0, "23234234234", "", "Hello", 123456);

// Arrays of Block
// ts는 block만 blockchain에 추가하도록 체크할 것
let blockChain: [Block] = [genesisBlock];

console.log(blockChain);

export {};