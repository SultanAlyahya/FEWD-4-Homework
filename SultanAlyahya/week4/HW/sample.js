var num=15;
var text='';
if(num%3 == 0){
    text +='Pling';
}
if(num%5 == 0){
    text +='Pling';
}
if(num%7 == 0){
    text +='Pling';
}
if(text != ''){
    console.log(text);
}else{
    console.log(num.toString());
}