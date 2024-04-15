const settitlebutton = document.querySelector('.settitle');
settitlebutton.addEventListener('click',settitle);
const title=document.querySelector('.titleContent');
const label1=document.querySelector('.lab1');

function settitle(){
  pageTitle= document.createElement('title');
  pageTitle.textContent=title.value;
  document.body.appendChild(pageTitle);
  header1= document.createElement('h1');
  header1.textContent=title.value;
  document.body.appendChild(header1);
  Counter = 1;
}
