function NGKAT_Function(){
  let MYCurrency = "RM ";
  var x = document.getElementById("NGKAT").value * 10;
  var y = document.getElementById("NGKAT_HBE").value * 1;
  document.getElementById("PriceNGKAT").innerHTML = MYCurrency + x.toFixed(2);
  document.getElementById("PriceNGKAT_HBE").innerHTML = MYCurrency + y.toFixed(2);
}

function PTYS_Function(){
  let MYCurrency = "RM ";
  var z = document.getElementById("PTYS").value * 15;
  document.getElementById("PricePTYS").innerHTML = MYCurrency + z.toFixed(2);
}

function Bill(){
  PTYS_Function();
  NGKAT_Function();
  let MYCurrency = "RM ";
  var x = document.getElementById("NGKAT").value * 10;
  var y = document.getElementById("NGKAT_HBE").value * 1;
  var z = document.getElementById("PTYS").value * 15;
  var PTotal = x + y + z;
  var SST = 6 / 100 * PTotal;
  var GTotal = SST + PTotal;
  document.getElementById("Total").innerHTML = MYCurrency + PTotal.toFixed(2);
  document.getElementById("SST_Amount").innerHTML = MYCurrency + SST.toFixed(2);
  document.getElementById("Grand_Total").innerHTML = MYCurrency + GTotal.toFixed(2);
}