function toggleMenu(){
  const tglMenu = document.querySelector('.menu');
  tglMenu.classList.toggle('active'); 
}
function getUrl(url){
  document.getElementById('slider').src = "video/" + url; 
}