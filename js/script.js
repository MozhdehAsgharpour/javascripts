function toggleMenu(){
  const tglMenu = document.querySelector('.menu');
  tglMenu.classList.toggle('active'); 
}
function getUrl(url){
  document.getElementById('slider').src = "video/" + url; 
}
const  containar = document.querySelector('#containar');
window.onmousemove = function(e){
  let x = e.clientX / 5;
  let y = e.clientY / 5;

  containar.style.backgroundPositionX = x + "px";
  containar.style.backgroundPositionY = y + "px";
}