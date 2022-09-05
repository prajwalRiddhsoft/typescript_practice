export{};
//Classes in Typescript

//Here is the most basic class -an empty one:
class NewClass {};


//---------------------------------- Fields in class ----------------------------------
/**
 * A field declaration creates a public writeable property on a class.
 * The type annotation is optional, if not mentioned the fields will be of type any.
 * The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.
 * When the strictPropertyInitialization is true, 
 * Typescript will raise an error when property are declared but not initialized in the constructor 
 */
class NewClass2{
    x:number;
    y:string;
}
const cs = new NewClass2();
cs.x = 9;
cs.y = 'nine';

/**
 * Initialized fields
 * Fields can also have initializers; these will run automatically when the class is instantiated,
 * Just like with const, let, and var, the initializer of a class property will be used to infer its type
 */
class NewClass3{
    x=0;
    y='zero';
}
const cs2 = new NewClass3();
console.log(`X is ${cs2.x} and y is ${cs2.y}`); //Will Print--> X is 0 and y is zero

/**
 * Readonly fields
 * Fields may be prefixed with the readonly modifier. 
 * This prevents assignments to the field outside of the constructor.
 */
class NewClass4{
    readonly greet:string = 'hello';
    constructor(greetB?:string){
        if(greetB !== undefined){
            this.greet=greetB;
        }
    }
}
const cs3 = new NewClass4('hi'); //This is ok
//cs3.greet = 'Bye'; //Not OK



//---------------------------------- Constructors in class ----------------------------------
/**
 * Class constructors are very similar to functions. 
 * You can add parameters with type annotations, default values, and overloads.
 * Constructors can't have type parameters, Constructors can't have return type annotations 
 */
class NewClass5{
    x:number;
    y:string;
    
    //Normal signature with defaults
    constructor(x=3, y='three'){
        this.x = x;
        this.y = y;
    }
}


//---------------------------------- Methods in class ----------------------------------
/**
 * A function Property on a class is called a method.
 */