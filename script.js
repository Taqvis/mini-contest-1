function page1(){
  var inputVar1 = document.getElementById("Fprime").value;
  var inputVar2 = document.getElementById("Sprime").value;
  if (inputVar1 == 1049 && inputVar2 == 1051 || inputVar2 == 1049 && inputVar1 == 1051){
    window.location='second-page.html';
  }
  else{
    alert("Wrong numbers");
  }
}

function page2(){
  var inputVar3 = document.getElementById("key").value;
  if (inputVar3 == 11){
    window.location='third-page.html';
  }
  else{
    alert("Wrong key");
  }
}

function page3(){
  var inputVar4 = document.getElementById("location").value;
  if (inputVar4 == 'Fucking'){
    window.location='fourth-page.html';
  }
  else{
    alert("Wrong location");
  }
}