// Menu
const menu = document.querySelector(".menu ul");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");
const body = document.body;
const menuItems = menu.querySelectorAll("li");
function toggleMenu() {
        menu.classList.toggle('navbar__open');
        menuButton.classList.toggle('navbar__icons--active'); 
        overlay.classList.toggle('show');
        body.classList.toggle('no-scroll', menu.classList.contains('navbar__open'));
}
menuButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
menuItems.forEach(item=>{item.addEventListener('click', ()=>{
    if (window.innerWidth <= 768) {
        toggleMenu();
    }
}   
)});
// Close the menu if the window is resized to be wider than 768px
window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && menu.classList.contains('navbar__open')) {
        toggleMenu();
    }   
});

// header fixed
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        document.getElementById('fixed').classList.add('navbar-fixed');
    } else {
        document.getElementById('fixed').classList.remove('navbar-fixed');
    }
});

