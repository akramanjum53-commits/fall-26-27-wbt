function add(a,b){
    return a+b;
}
let result= add (10,20);
function showsum(){
    let a=5;
    let b= 10;
    let result= add (a,b);

    document.getElementById("result").innerHTML="Result:" + result;
    console.log(result);
    if (result>100){
        alert("Big number!");
    }
}