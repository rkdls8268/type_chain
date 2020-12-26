import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    // static method: method가 Block 클래스 안에 있고 클래스가 생성되지 않았어도 호출할 수 있는 method
    // 즉, Block 클래스 안에서 항상 사용 가능한 method
    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timestamp:number, 
        data:string
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

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

// calculateBlockHash가 static method이므로 Block.calculateBlockHash 사용 가능

const genesisBlock: Block = new Block(0, "23234234234", "", "Hello", 123456);

// Arrays of Block
// ts는 block만 blockchain에 추가하도록 체크할 것
let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1]; // 가장 최근에 저장된 블록체인

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash( // static이므로 사용 가능
        newIndex, 
        previousBlock.hash, 
        newTimestamp, 
        data
    );
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("bye bye"));

export {};