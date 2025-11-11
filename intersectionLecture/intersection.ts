type FileData={
    path:string;
    content:string;
};

type DatabaseData={
    connectionUrl:string;
    credentials:string;
}

type Status={
    isOpened:boolean;
    errorMessage?:string;
};

interface AccessedFileData extends FileData, Status {}
interface AccessedDatabaseData extends DatabaseData, Status {}