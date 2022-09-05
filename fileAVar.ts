export{};
//Types in Variables in Typescript
/**
 * The Primitives: string, number, boolean
 * Arrays: denoted by [], ..i.e string[], number[]...
 * Alternative for Array is the Array<T> syntax T is data type
 * 
 * Data type of a variable is the data type of value at initialization (type inference)
 * Or we can use annotation
 * The any type, variables that are declared without any value(noImplicitAny) or with annotation ':any' 
 * are of type any they can hold any datatype.
 * 
 * 
 * Type inference in Arrays can infer variable types from initial values and return statements
 * Also note when we need to use tuples we need to use explicit type annotation
 * 
 */

//Declaring Variables using type annotation

//Primitives
let myName:string = 'Prajwal';
let year:number = 2022;
let isRaining:boolean = false;

//Any 
let anyVar: any = 'string';
anyVar=9;
let anyVar2;
anyVar2='string';
anyVar2=9;


//------------------------------------------ Arrays and Tuples ------------------------------------------

//Arrays
let manyNames:string[] = ['Prajwal', 'Raj', 'Conor', 'Dustin'];
let rollNo:number[] = [6,7,8,9];
let manyBooleans:boolean[] = [true, false, true];

//Multidimentional Arrays
let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];


//Tuples
/**
 * In TypeScript, Tuple are arrays with a fixed sequence of types.
 * In TypeScript, when an array is typed with elements of specific types, it’s called a tuple.
 * Tuple types specify both the lengths and the orders of compatible tuples
 */
let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; 

//Cannot assign an array a tuple variable, even when the elements are of correct type
let tup: [string, string] = ['hi', 'bye'];
let arr2: string[] = ['there','there'];
tup = ['there', 'there']; // No Errors.
// tup = arr; // Type Error! An array cannot be assigned to a tuple.