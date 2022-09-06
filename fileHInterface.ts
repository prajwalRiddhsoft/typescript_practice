export{};
//In type script, we can declare types in a variety of ways, Previously we have used type.
//In this file, we will be using Interfaces to declare types.
//The syntaxes for type and interface are slightly different,
//since interface does not require an equals sign (=) before the typed object.

interface Mail {
    postagePrice: number;
    address: string
}
const catalog: Mail = {
    postagePrice: 300,
    address: "Patan, Lalitpur"
}

// ------- Difference Between Type and Interface -------
/**

    The biggest difference between interface and type is that interface can only be used to type objects,
    while type can be used to type objects, primitives, and more. As it turns out, type is more versatile and 
    functional than interface.

 */

// ---- Why Do we use Interface ----
/**
    The interface keyword in TypeScript is especially good for adding types to a class. 
    Since interface is constrained to typed objects and using class is a way to program with objects, 
    interface and class are a great match.

    Typescript gives us the ability to apply a type to an object/class with the implements keyword 
*/
interface Robot {
    identify: (id: number) => string;
}

class IRobot implements Robot {

    identify(id: number): string{
        console.log('Hello my id is: ', id);
        return "Hello";
    }

    doSomething(name: string): void{
        console.log("Hell, my name is ", name);
    }

}

// Note: ---- In the above class we have implemented all the property of the interface as well as defined 
// properties that are not present in the interface. ----