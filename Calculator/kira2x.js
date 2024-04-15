//squareFunction
var btn=document.querySelector('#Squ');
var result=document.querySelector('#Squared');
btn.onclick=function(){
  var square_input = parseInt(document.getElementById('square_input').value);

  var s = (square_input)*(square_input);
  result.textContent = "Result is " + s;
}

//HalfFunction
var btn2=document.querySelector('#Hal');
var result2=document.querySelector('#Halved');
btn2.onclick=function(){
  var half_input = parseInt(document.getElementById('half_input').value);

  var h = half_input / 2;
  result2.textContent = "Result is " + h;
}

//fractionFunction
var btn3 = document.querySelector('#percent-button');
var result3=document.querySelector('#Frac');
btn3.onclick=function(){
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);

  var f = (num1 / num2) * 100;
  result3.textContent = "Result is " + f +"%";
}

//radiusFunction
var btn4 = document.querySelector('#area-button');
var result4 = document.querySelector('#Rad');
btn4.onclick = function(){
  var area_input = parseInt(document.getElementById('area_input').value);

  var r= (22/7) * area_input * area_input;
  result4.textContent = "Result is " + r +"cm²";
}
