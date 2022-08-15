var numbers = [1,2,3,4,5,6,7];
//var cnt=0;
//------------------------find--------------------------------------------
var result = numbers.find((currentValue, index, arr)=>{
        //console.log(index);
        //console.log(arr);
        //cnt++; 
        return currentValue>4; //tar mane 5 print korbe
});
console.log(`output of find is : ${result}`);

//--------------------------findIndex-------------------------------------
var result2 = numbers.findIndex((currentValue1, index, arr) => {
        return currentValue1>4; // 4 print korbe karon 5 er index holo 4
});

console.log(`output of findIndex is: ${result2}`);

//--------------------------filter---------------------------------------
var result3 = numbers.filter((currentValue, index, arr)=>{
    return currentValue>4; //(filter) 4 theke boro sob gula print korbe
});

console.log(`output of filter is : ${result3}`);

//---------------------------slice---------------------------------------
var result4 = numbers.slice(2,4); // eikhane call_back function dorkar nai
// 2 mane (2-1)=1 index theke 4 mane (4-1)=3 index er modde jara ache.
console.log(`output of the slice: ${result4}`);

//----------------------------Splice--------------------------------------
//splice(konidex_theke_slice_korbo, koyta_element_bad_dibo, ki_ki_element_insert_krobo)
var result5 = numbers.splice(1, 2,  12, 13, 14); 
//splice main array ke change kore dey
console.log(numbers); // total change ta pabo numbers totha mul array te
console.log(result5); // je 2ta bad dibe taderke pabo result e

//-----------------------------concat----------------------------------------
var num1 = [1,2,3];
var num2 = [4,5,6];
var num3 = [7,8,9];
// concat: 2 ba tar beshi array ke jora lagay, tobe mul array thik e thake
var result6 = num1.concat(num2,num3);
console.log(`oupput of 3 concating array: ${result6}`);


//---------------------------------Push-----------------------------------
//push: mul array ke change kore dey, push er modde ak ba akadik element at a time push kore jay.
//even onno akta array of caile push kora jay tobe seta akta element hisabe thakbe
//splice er moto merge hobe na
//ar push always array er sheshe hoy.

var num4 = [1,2,3,4];
var result7 = num4.push(1,2,3);
//console.log(result7); //ekhane shudu last er element ta dekhabe
console.log(`output of push method: ${num4}`);// push howar por sob element dekhabe

