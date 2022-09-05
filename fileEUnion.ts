export{};
//Union type in Typescript
/**
 * In TypeScript, a union type variable is a variable which can store multiple type of values 
 * (i.e. number, string etc). A union type allows us to define a variable with multiple types. 
 * The union type variables are defined using the pipe ('|') symbol between the types.
 */

//The myVar variable can store either string or number
let myVar: string | number;
myVar="Prajwal";    //OK
myVar=77;           //OK
//myVar=true;           //NOT OK

