//Toogle class active
const navbarNav = document.querySelector('.navbar-nav');
//Ketika Humberger menu di klik
document.querySelector('#humberger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
 };

 //Klik diluar side bar untuk merenghilangkan side bar

const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', function(e) {
    if(!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});