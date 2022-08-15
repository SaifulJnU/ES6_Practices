//SpreadOperator
// ata  diye arrays concat er kaj kore jay mul array te kono change kora chara
// ...arrayname 
var numbers = [1,2,3,4,5];

var a = [...numbers]; //exact copy of numbers;
// akhon number e change korleo a te ar change hobe na
// mane 2ta array akhon totally alada

console.log(a);
console.log(numbers);
//numbers.push(4);
//console.log(a);
//console.log(numbers);


///concat
var num1 =[1,2,3];
var num2 = [2,3,4];

var num3 = [...num1, ...num2];
console.log(`After concat by using spread: ${num3}`);

// for object
var obj1 = {
        name: "saiful",
        address: "dhupkhola",
        phone: "017xxxxxxxx"
}
var obj2 = {
        nam: "Rohim",
        add: "Gendaria",
        ph: "017xxxxxxxx"
}
//note 2ta object er same name hole 2nd object er value akta asbe mane duplicata keys value asbe  na

var ob3 = {...obj1, ...obj2};
console.log(ob3);