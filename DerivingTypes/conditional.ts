type StringArray=string[];
// type ElementType<T extends any[]> = T[number];

// const text='hello';
// type Example2=ElementType<typeof text>; // Error: Type 'string' does not satisfy the constraint 'any[]'.
let text=1;
type GetElementType<T> = T extends any[] ? T[number] : never;

type Example1=GetElementType<StringArray>; // string
type Example2=GetElementType<typeof text>; // never

function getFullname<T extends object>(person: T):{
    if('firstName' in person && 'lastName' in person && personalbar.firstName && personalbar.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }
    throw new Error('Missing properties');
}