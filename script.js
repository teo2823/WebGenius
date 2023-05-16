const menuBar = document.querySelector('.menu-bars');
const navbar= document.querySelector('.navbar');
const bkgr = document.querySelector('.header__background');
const showNav = () => {
    navbar.style.width = '280px';
    navbar.style.padding = '50px 20px';
    bkgr.style.display = 'block';
}

const hideNav = () => {
    navbar.style.width = '0px';
    navbar.style.padding = '0px';
    bkgr.style.display = 'none';
}

menuBar.addEventListener('click', showNav);
bkgr.addEventListener('click', hideNav);