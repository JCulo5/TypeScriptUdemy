function logger<T extends new (...args:any[]) => any>(target:T,ctx:ClassDecoratorContext){
    console.log('logger decoreator');
    console.log(target);
    console.log(ctx);

    return class extends target{
        constructor(...args:any[]){
            super(...args);
            console.log('Class constructor');
            console.log(this);
        }
    }
}

function  autobind(target:(...args:any[]) => any,
    ctx:ClassMethodDecoratorContext){
        console.log(target);
        console.log(ctx);
        ctx.addInitializer(function(this:any){
            this[ctx.name]=this[ctx.name].bind(this);
        });
        return function(this:any){
            console.log('Executing original function');
            target.apply(this);
        }
    }

function fieldLogger(target:undefined,ctx:ClassFieldDecoratorContext){
    console.log(target);
    console.log(ctx);

    return (initialValue:any) => {
        console.log(initialValue);
        return '';
    }
}

@logger
class Person{
    @fieldLogger
    name="max";

constructor(){
    this.greet=this.greet.bind(this);
}

    @autobind
    greet(){
        console.log("hello my name is "+ this.name);
    }
}

const max=new Person();
const greet=max.greet;
console.log(max);