// const mainUserName ='Max';

// const greeting = `Hello, ${mainUserName}! Welcome to our platform.`;

type ReadPermissions='read' | 'no-read';
type WritePermissions='write' | 'no-write';

type FilePermissions=`${ReadPermissions}-${WritePermissions}`;

type DataFile={
    daata:string;
    permissions:FilePermissions;
};

type DataFileEventNames= `${keyof DataFile}Changed`;

type DataFileEvents={
    [Key in DataFileEventNames]: ()=>void;
};