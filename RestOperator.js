//Rest Operator: ata or 3 dot er kahini kintu ata spread na 2ta dekhte same
//but usecase er jayga alada
// rest operator function parameter e use kori jodi ami na jani ne koy parameter diye
// function ta call hobe

function fun(...rest){

        console.log(rest);  // rest er modde array akare sob gula value pabo jeta parameter hisabe asbe

}
fun(1,2,3,4,5);

// kintu ami jodi jani je 2ta sure asbe baki ta jani na se khetre
function fun2(a, ...rest){
        console.log(a) // prothom value ta a te store hobe
        console.log(rest);  //ar baki sob array hisabe rest e joma hobe
}

fun2(1,2,3,4,5);
