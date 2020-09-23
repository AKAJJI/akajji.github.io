var values = [0,0,0,0,0,0,0];
function clicked(clicked_checkbox){
  var id = parseInt(clicked_checkbox);
  var chkbox = document.getElementById(clicked_checkbox);
  var chkboxes = document.getElementsByClassName("checkbox");
  if (chkbox.checked ==true){
    // console.log(chkbox.checked);
    values[id]= 100/chkboxes.length; 
    console.log(values[id]);
  }else{
    // console.log(false);
    values[id]=0;
  }
  var width = 0;
  console.log("1"+ width);
  for( var i=0;i<values.length;i++){
    width = width + values[i];
  }
 
  console.log(width);
  var elem = document.getElementsByClassName("progress-value");
  console.log(elem);
  elem[0].style.width= width +"%";
      elem[0].innerHTML = width.toFixed(0) + "%";
      
      console.log("#clicked : "+elem[0].innerHTML); 
  console.log("#clicked : "+elem[0].style.width);
  var alert = document.getElementsByClassName("alert");
  if(width.toFixed(0) == 100){
    alert[0].style.display = "block";
  }else{
    alert[0].style.display = "none";
  }
  
  }

console.log(values);
function uncheckAll(){
  var alert = document.getElementsByClassName("alert");
  alert[0].style.display = "none";
  console.log(values);
  values=[0,0,0,0,0,0,0];
  console.log(values);
  var chkbox = document.getElementsByClassName("checkbox");
  // console.log(chkbox);
  var i;
  for(i= 0;i <chkbox.length;i++ ){
    if (chkbox[i].type == 'checkbox')   {
  chkbox[i].checked = false;
}
  }
  width=0;
  var elem = document.getElementsByClassName("progress-value");
  console.log("#1 : "+elem[0].innerHTML); 
  console.log("#1 : "+elem[0].style.width);
  if(elem){
  elem[0].style.width= 0 +"%";
  elem[0].innerHTML = 0 + "%"; 
  console.log(elem[0].innerHTML); 
  console.log(elem[0].style.width);
}
}



