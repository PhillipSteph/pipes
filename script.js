window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").classList.add("smalllogo");
    document.getElementById("logo").classList.remove("biglogo");
  } else {
    document.getElementById("logo").classList.add("biglogo");
    document.getElementById("logo").classList.remove("smalllogo");
  }
}
function menu() {
  var x = document.getElementById("myLinks");
  var nav = document.getElementById("topnav");
  if (x.style.display === "block") {
    nav.style.height="calc(8vh)";
    x.style.display = "none";
  } else {
    x.style.display = "block";
    nav.style.height="calc(55vh)";
  }
}
function isopen(n){
  switch(n){
    case 1:if(leftopened) return true;
    break;
    case 2:if(midopened) return true;
    break;
    case 3:if(rightopened) return true;
    break;
    default: break;
  }
}
leftopened=false;
midopened=false;
rightopened=false;
originwidth="20%";
function threeopen(n){
  if(window.innerWidth<945)return;
var threepartsimg1 = document.getElementById("thgimg1");
var threepartsimg2 = document.getElementById("thgimg2");
var threepartsimg3 = document.getElementById("thgimg3");
  const left = document.getElementById("main1left");
  const mid = document.getElementById("main1mid");
  const right = document.getElementById("main1right");
  if(leftopened || midopened || rightopened){
    threeclose();
    return;
  }
    switch(n){
      case 1:
        left.style.width = "70%";
        threepartsimg1.classList.add("altimg");
        left.style.zIndex="20";
        leftopened = true;
        document.getElementById("closeleft").style.display = "block";
      break;
      case 2:
        mid.style.zIndex="20"; 
        mid.style.left="15%";
        mid.style.width = "70%";
        threepartsimg2.classList.add("altimg");
        midopened = true;
        document.getElementById("closemid").style.display = "block";
      break;
      case 3:
        right.style.left ="15%";
        right.style.width = "70%";
        threepartsimg3.classList.add("altimg");
        right.style.zIndex="20";
        rightopened = true;
        document.getElementById("closeright").style.display = "block";
      break;
      default: break;
    }
}
function threeclose(){
var threepartsimg1 = document.getElementById("thgimg1");
var threepartsimg2 = document.getElementById("thgimg2");
var threepartsimg3 = document.getElementById("thgimg3");
  const left = document.getElementById("main1left");
  const mid = document.getElementById("main1mid");
  const right = document.getElementById("main1right");
  threepartsimg1.src="media/bild1.jpg";threepartsimg1.classList.remove("altimg");
  threepartsimg2.src="media/bild4.jpg";threepartsimg2.classList.remove("altimg");
  threepartsimg3.src="media/bildkleiner.png";threepartsimg3.classList.remove("altimg");
  document.getElementById("closeleft").style.display = "none";
  document.getElementById("closemid").style.display = "none";
  document.getElementById("closeright").style.display = "none";

left.style.width = originwidth;
right.style.width = originwidth;
mid.style.zIndex="3";
right.style.zIndex="3";
left.style.zIndex="3";
mid.style.left = "40%";
right.style.left = "65%";
mid.style.width = originwidth;
left.style.display = "block";
mid.style.display = "block";
right.style.display = "block";
leftopened = false;
midopened = false;
rightopened = false;
}