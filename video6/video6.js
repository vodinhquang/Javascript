let a = 6;
let b= '5'
let c = 5;
let d = +b;
let e = '6';
let f = Number(e)
console.log('a is:',typeof a, 'b is:', typeof b, b===c, c===d, f===a);

let text =document.querySelector('#quang').innerHTML //# là id
document.querySelector('.quang').innerHTML = text.toUpperCase() //. là class