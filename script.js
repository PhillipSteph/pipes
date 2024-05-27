window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.width = "calc(5vw)";
    document.getElementById("logo").style.left = "calc(46.7vw)";
    document.getElementById("logo").style.top = "calc(0.1vh)";

  } else {
    document.getElementById("logo").style.width = "calc(12vw)";
    document.getElementById("logo").style.left = "calc(43.5vw)";
    document.getElementById("logo").style.top = "calc(2vh)";

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
function changeSlide(n){
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");
switch(n){
    case 1: img1.style.zIndex = "1";img2.style.zIndex = "0";img3.style.zIndex = "0";break;
    case 2: img1.style.zIndex = "0";img2.style.zIndex = "1";img3.style.zIndex = "0";break;
    case 3: img1.style.zIndex = "0";img2.style.zIndex = "0";img3.style.zIndex = "1";break;
    default: break;
  }
}
leftopened=false;
midopened=false;
rightopened=false;
originwidth="20%";
function threeopen(n){
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
  threepartsimg1.src="bild1.jpg";threepartsimg1.classList.remove("altimg");
  threepartsimg2.src="bild4.jpg";threepartsimg2.classList.remove("altimg");
  threepartsimg3.src="bildkleiner.png";threepartsimg3.classList.remove("altimg");
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