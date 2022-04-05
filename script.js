var num_to_rom = true;
var rom_to_num = false;

function helper(){
    num_to_rom = true;
    rom_to_num = false;
}
function helper2(){
    num_to_rom = false;
    rom_to_num = true;
}
function helper3(){
    if(num_to_rom == true){
        convertToRoman();
    }
    else if (rom_to_num == true){
        convertToNumber();
    }
}

function error(){
  document.getElementById('error_label').innerHTML = "Please enter a valid input"
}

function convertToNumber () {
  var input_str = document.getElementById('romannumber').value;
  var str = input_str.toUpperCase();
  var validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
  var token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
  var key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  var num = 0, m;
  if (!(str && validator.test(str))) 
  {
    error();
    return;
  }
  while (m = token.exec(str)){
    num += key[m[0]];
  } 
  
  document.getElementById('number').value = num;
  document.getElementById('error_label').innerHTML = ""

  }

function convertToRoman() {

var num =  romNum = document.getElementById('number').value
if(num <= 0){
  error();
  return;
}

var roman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};
var str = '';

for (var i of Object.keys(roman)) {
  var q = Math.floor(num / roman[i]);
  num -= q * roman[i];
  str += i.repeat(q);
}

document.getElementById('romannumber').value = str;
document.getElementById('error_label').innerHTML = ""

}