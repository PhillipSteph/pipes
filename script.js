function changeSlide(n){
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");
  switch(n){
    case 1: img1.style.zIndex = "1";img2.style.zIndex = "0";img3.style.zIndex = "0";break;
    case 2: img1.style.zIndex = "0";img2.style.zIndex = "1";img3.style.zIndex = "0";break;
    case 3: img1.style.zIndex = "0";img2.style.zIndex = "0";img3.style.zIndex = "1";break;
  }

}
var index=1;
setInterval(() => {

  index++;
  if(index===4){
    index = 1;
  }
  changeSlide(index);
}, 4000);