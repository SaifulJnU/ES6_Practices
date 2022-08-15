//Destructuring
// mane object ba array theke specific data niye asha

//-----------------------object destructuring------------------------------------
// const {keyname} = objectName;
var obj = {
        name: "Saiful",
        age: 24,
        education: {
                degree: "Bsc in CSE",
                institute: "JnU",
        }
}

// task 1. name ta paite cacchi

const {name}= obj;
console.log(name);

// task 2. ami name ta paite cai and ata onno name cai
const {name: title}=obj;
console.log(title);

// task 3. ami nested object er institute ta cacchi
const {education:{institute}}=obj;
console.log(institute);

//-----------------------array destructuring-------------------------------------
// array er khetro destructuring kora jay
// const [varibalename] = arrayname;
var num = [1,2,3,4];
//task 1. num array er 2 o 4 value ke a and b te destructuring er maddome assign koro

const [, a, , b] = num;  // koma mane o index ta skip koro
console.log(a,b);


//task 2. value swap koro
let k =10;
let l= 12;

[k,l]=[l,k]; //swapping done
console.log(a,b);
