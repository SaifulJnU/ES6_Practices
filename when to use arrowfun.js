//Arrow Function:
/* 1. It is a syntactic sugar of real function
   2. It is  not concern about 'this' keyword, so where can have problem with this keyword then
   we can use arrow function
   3. we can not make class instance('new' key word) by using arrow function

<<An arrow function doesn’t have its own this value.
 Instead, it uses the this value of the enclosing lexical scope.An arrow function also 
 doesn’t have the arguments object. Avoid using the arrow function for event handlers, 
 object methods, prototype methods, and functions that use the arguments object>>
*/

const jsobject = {
        name: "saiful",   //key: value
        array: ["rahim","karim","joshim"], //key: array
        print: function()   //key: function
        {
                        this.array.forEach((a)=>{
                        console.log(`${this.name} is the brother of ${a}` );
                });
        },
}

jsobject.print();