
var check = document.getElementsByClassName('checkbtn');

var ul = document.getElementById("ul");

if (this.window.screen.width <= 952) {
   document.getElementById("tees").classList.add('chk');
   document.getElementsById("dc").classList.remove('subin');
   document.getElementById("sec1").style = "height:400px; background-img:url('../images/download.png')";
} else {
   document.getElementById("tees").classList.remove('chk');
   document.getElementsById("dc").classList.add('subin');
}