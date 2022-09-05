export{};
//Enums in TypeScript
/**
 * An enum can be defined using the enum keyword
 * (Enums are custom types)
 */


//Numeric Enum
enum Direction{
    Up = 1,
    Down,
    Left,
    Right
}

//String Enum
enum Direction2{
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "DOWN"
}

//Heterogeneous Enum
enum midexDirection{
    Up="Up town and to the left",
    Down= 4,
    Left="Chiwan",
    Right=88
}