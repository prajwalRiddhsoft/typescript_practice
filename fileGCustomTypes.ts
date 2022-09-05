export{};
//Custom Types in typescript
/**
 * Custom Types
 * Custom Types enables type checking that is tailored to your exact purpose.
 * We have already looked at a custom type Tuple.
 * The custom types cover here can be used in the same way as primitive types covered earlier,
 * They can be used as type annotation during variable declaration, also can be used as type 
 * annotation for function, and you can even do type inference with custom types.
 */

//---------------------------------------------- Enum ----------------------------------------------
/**
 * We use enum when we want to enumerate all the possible values a variable could have.
 * Enum are used when we want to limit the possible values a variables could have.
 */

//Numeric Enum 
/**
 * By default if no values are mentioned, 
 * Enum values are assigned a numerical value according to their listed order. 
 * The first value is assigned a number of 0, the second a number of 1, and onwards.
 * Here Direction3.North has a value of 0, Direction3.South - 1, Direction3.East - 2,
 * Direction3.West - 3,
 */
enum Direction3{
    North,
    South,
    East,
    West
}

/**
 * We can change the starting number by assigining North a value of 7, so then South would be 8,
 * East 9, and West 10 OR we could assign each value a seperate number.
 * We can assign number values to numberic enum variables
 * let churchLocation: Direction4;
 * churchLocation = 88; //Is valid although 88 does not represent anything in Direction4.
 */
enum Direction4{
    North = 9,
    South = 6,
    East = 77,
    West = 42
}

//String Enum
/**
 * Typescript also allows us to use enums based on strings, referd to as String Enums,
 * With numeric enums the numbers could be assigned automatically, but with string enums we need 
 * to write the string explicitly.
 * By convention the string values are in uppercase.
 * In most case the string values of the enums is just capitalized form of the enum name.
 * String enums are more strict than numberic enums, in string enums variables cannot be assigned to strings at all.
 * let churchLocation:PointToDirection;
 * churchLocation = PointToDirection.South; //Only allowable way to do this
 * churchLoaction = 'NORTH'; //Is not valid
 */
enum PointToDirection{
    North='NORTH',
    South='SOUTH',
    East='EAST',
    West='WEST'
}



//---------------------------------------------- Object ----------------------------------------------
/**
 * Object Type allows us fine level control over variable types
 * They are the most commonly used custom types in Typescript.
 * TypeScript places no restrictions on the types of an object’s properties. They can be enums, arrays, and even other object types
 */
//Type annotaiton of an object meant to represent a Person
//The annotaion looks like an object literall, but instead of having values apperating after properties we have types.
//Trying to assign a value to aPerson that does not have name and age property of specified type will result in a type error.
let aPerson: {name:string, age:number};


//---------------------------------------------- Type alias ----------------------------------------------
/**
 * Type alias
 * One great way to customize the types in our program is to use type alias.
 * Type alias are useful for refering to complicated types that needs to be repeated like Objects and Tuples.
 */
 type MyString = string;
 let myStringVar: MyString = 'Hi'; // Valid code. Although comming up with alternative names for string may not be very useful

 //Using Type alias with objects
 type Person = {firstName:string, lastName:string, age:number};
 let aCompany: {
     companyName: string,
     boss: Person,
     employees: Person[],
     employeeOfTheMonth: Person,
     moneyEarned: number
 }

 aCompany = {
     companyName: 'abc',
     boss: {firstName: 'bossMAn', lastName: '', age: 30},
     employees: [{firstName: 'bossMAn', lastName: '', age: 30}],
     employeeOfTheMonth: {firstName: 'bossMAn', lastName: '', age: 30},
     moneyEarned: 30000,
 }


 //---------------------------------------------- Function Types ----------------------------------------------
 /**
  * Function Type
  * One of the neat things about JavaScript and TypeScript is that functions can be assigned to variables.
  * Also in TypeScript we can precisely control the kinds of functions assignable to a variable.
  * We do this by using the function type, which specifies the argument types and the return type of a function.
  * This syntax is just like arrow notation for functions, except instead of the return value we put the return type.
  */
 //Function type that is only compatible with functions that take in two string arguments and return a number.
 type StringToNumberFunc = (num1:string, num2:string) => number;
 let myFunc: StringToNumberFunc;
 //Note: it doesn’t matter what we name the function parameters, so long as they have the correct types.
 myFunc = function(word1:string, word2:string) {
     return word1.length - word2.length;
 }

 //---------------------------------------------- Generic Types ----------------------------------------------
 /**
  * TypeScript’s generics are ways to create collections of types (and typed functions, and more) 
  * that share certain formal similarities.
  * In general, writing generic types with type typeName<T> allows us to use T within the type annotation as a type placeholder.
  */
 //The generic Family<T> cannot actually be used as a type in a type annotation. 
 //Instead, we must substitute T with some type of our choosing, for example string
 type Family<T> = {
     parents: [T,T], children:T[]
 }
 let aFamily:Family<string> = {
     parents: ['Dustin', 'Julie'],
     children: ['Conor', 'Dan'],
 }

//Generics funcitons
//Using generics we can make the valid for all types
function getFilledArray(value:string, n:number) {
    return Array(n).fill(value);
}
//The funtion is valid for any primitive types also for custom types
function getFilledArray2<T>(value: T, n: number): T[] {
    return Array(n).fill(value);
}