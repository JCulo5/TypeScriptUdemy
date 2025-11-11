class ListNode<T>{
    next?: ListNode<T>;

    constructor(public value: T) {}
}

class LinkedList<T>{
    private root? : ListNode<T>;
    private tail? : ListNode<T>;
    private length=0;

    add(value: T) {
        const node=new ListNode(value);
        if(!this.root || !this.tail){
            this.root=node;
            this.tail=node;
        } else{
            this.tail!.next=node;
            this.tail=node;
        }
        this.length++;
    }
    
    getNumberOfElements():number{
        return this.length;
    }

    print(){
        let current=this.root;
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }
}

const numberList=new LinkedList<number>();
numberList.add(1);
numberList.add(2);
console.log(numberList.getNumberOfElements());
numberList.print();
//list.length; // Error: Property 'length' is private and only accessible within class 'LinkedList'.
const nameList = new LinkedList<string>();