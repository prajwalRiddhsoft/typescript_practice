export{};
//Functions in Typescript

/**
 * Return type annotation 
 * @returns a string
 */
function func1():string{
    return 'A Sring';
}

/**
 * Paramter type annotation 
 * @param firstVar - is of type string
 * @returns - returns void
 */
 function func2(firstVar:string):void{
     console.log(firstVar);
}

/**
 * Optional parameters 
 * @param firstVar - is of type string and is optional
 * @returns - returns void
 */
 function func3(firstVar?:string):void{
     console.log(firstVar);
}

/**
 * Default parameters 
 * default parameters are also optional
 * @param firstVar - is of type string(type inference) and is optional
 * @returns - returns void
 */
 function func4(firstVar:string = 'no name'):void{
     console.log(firstVar);
}

/**
 * Function with paramater and return types
 * The function takes two parameter and returns a string
 * 
 * @param firstVar - is of type string
 * @param secondVar - is of type number
 * @returns a string
 */
function func5(firstVar:string, secondVar:number):string{
    console.log('This function just returns a string');
    return 'a string';
}

/**
 * Function with optional ands default parameter (default parameters also are optional)
 * 
 * @param firstVar - is of type string(type inference)
 * @param secondVar - is of type boolean and is optional
 */
function func6(firstVar='default', secondVar?:boolean):void{
    console.log('Does not return anything');
}

/**
 * Rest Parameters
 * the function takes in one age parameter and any other parameter following that should be of type string
 * the rest of the parameters following the first, are grouped into an array and assigned to otherInput
 * 
 * @param age - is of type number
 * @param otherInput - is of type array(RestParameters)
 */
function randomfunc2(age:number, ...otherInput:string[]):void{
    console.log(age);
    for(let i=0; i<otherInput.length; i++){
        console.log(otherInput[i]);
    }
}