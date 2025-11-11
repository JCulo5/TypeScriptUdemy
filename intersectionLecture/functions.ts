function getLength(val:string | any[]){
    if(typeof val==='string'){
        const numberOfWords=val.split(' ').length;
        return `${numberOfWords} words`;
    }
    return val.length;
}

const numOfWords=getLength('Hello world! This is TypeScript.');
const numItems=getLength([1,2,3,4,5]);

console.log(numOfWords);
console.log(numItems);