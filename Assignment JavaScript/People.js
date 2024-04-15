var people = [
{name: 'Alyssa', lname: ['P.', 'Hacker'], age: 26},
{name: 'Ben', lname: ['L.','Bitdiddle'], age: 34},
{name: 'Eva',lname: ['Lu', 'Ator'], age: 40},
{name: 'Lem', lname: ['E.','Tweakit'], age: 45},
{name: 'Louis',lname: ['M.','Reasoner'], age: 21},
{name: 'Shahan',lname: ['Haig','Krakirian'], age: 26}
];

function fullNamelist(people){
  var fullname1=[];
  for(var i = 0 ; i < people.length; i++){
    var fullname = '';
      for (var j = 0; j <people[i].lname.length; j++) {
        fullname += people[i].lname[j]+" ";
      }

      fullname1.push(i+1 +"-"+people[i].name + " " + fullname);
  }
  return fullname1;
}

var allbutton =  document.getElementById("all");
allbutton.addEventListener("click",function(){
  var list = fullNamelist(people);
  document.getElementById("solution").innerHTML = list.join(" <br> ");
})



function ageButton(){
  var ind = document.getElementById("n-input").value;
  document.getElementById("solution1").innerHTML = people[ind].name + " age is ";
  document.getElementById("solution2").innerHTML = people[ind].age;
  
}
