//jshint esversion:6
var i=1;
function callme(){
  var  name= $("#movie").val();
  var rating=$("#IMDB").val();
if(name!=""  && rating!=""){

  var newdiv=document.createElement("div");
  var newline=document.createElement("hr");
  $(newdiv).addClass("row");
  $(newdiv).addClass("row_data-"+i);
  var one="movie-"+i;
  var two="IMDB-"+i;
  var content="<div class='left-text col-sm-6'><h3 class="+one+"></h3></div><div class='right-text col-sm-6'><h3 class="+two+"></h3></div>";
  $(newdiv).append(content);
  $(".datalist").append(newline);
  $(".datalist").append(newdiv);
  $(".movie-"+i).text(name);
  $(".IMDB-"+i).text(rating);
  i++;
  $("#movie").val(null);
  $("#IMDB").val(null);
}
else{
  alert("please enter some valid information");
}
}
