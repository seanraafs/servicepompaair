const navbarNav = document.querySelector('.navbar-nav');
// ketika di menu di klik
document.querySelector ('#menu').
onclick = () =>{
    navbarNav.classList.toggle('active');

};
// klik diluar sidebar
const menu =document.querySelector('#menu');

document.addEventListener('click',function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
    }
});