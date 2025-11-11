type Operations={
    readonly add: (a:number,b: number)=>number;
    readonly subtract: (a:number,b: number)=>number;
    readonly multiply: (a:number,b: number)=>number;
    readonly divide: (a:number,b: number)=>number;
};

type Results<T>={
    // add:number;
    // subtract:number;
    // multiply:number;
    // divide:number;
    readonly [Key in keyof T]-?:number;
};

let mathOperations:Operations={
    add(a: number,b: number) {
        return a+b;
    },
    subtract(a: number,b: number) {
        return a-b;
    },
    multiply(a: number,b: number) {
        return a*b;
    },
    divide(a: number,b: number) {
        return a/b;
    }
}

let mathResults:Results<Operations>={
    add: mathOperations.add(10,5),
    subtract: mathOperations.subtract(10,5),
    multiply: mathOperations.multiply(10,5),
    divide: mathOperations.divide(10,5),
};