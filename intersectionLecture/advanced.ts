type DataStore={
    [prop: string]:number | boolean;
};

let someObj: Record<string,number|boolean>={};
let store: DataStore={};

//..
store.id=5;
store.isOpen=true;

let roles=['admin','user','guest'] as const;
const firstRole=roles[0]; //'admin'

const dataEntries={
    entry:0.51,
    entry2:0.75
} satisfies Record<string,number>;

