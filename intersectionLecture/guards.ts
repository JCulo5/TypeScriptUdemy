type FileSource={type:'file', path:string};
const fileSource: FileSource={
    type:'file',
    path:'some/path/to/file.csv',
};

type DBSource={type:'database', connectionUrl:string};
const SBSource:DBSource={
    type:'database',
    connectionUrl:'postgresql://user:password@localhost:5432/mydb',
};

type Source = FileSource | DBSource;

function isFile(source:Source){
    return source.type==='file';
}

function loadData(source:Source){
    //open and read file or do stg with database
    // if('paths' in source){
    //     //open file
    //     return;
    // }
    if(source.type==='file'){
        source.path; //use file
        return;
    }
    source.connectionUrl; //use database
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
 // .join() OR .scan() ...
    if (entity instanceof User) {
        entity.join();
    }
    else if(entity instanceof Admin){
        entity.scan();
    }
}