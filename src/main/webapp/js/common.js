function changeTab(tabName) {
    const boards = document.querySelectorAll('.board');
    const tabs = document.querySelectorAll('.sub_nav_vtuber a');

    boards.forEach(board => {
        board.classList.remove('active');
    });
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });


    const selectedTab = document.getElementById("nav_" + tabName);
    const selectedTabS = document.getElementById("nav_ham_" + tabName)
    selectedTab.classList.add('active');
}

var navbar = document.querySelector(".header_nav");

const navbarBurger = document.querySelector('.navbar_burger');
const navbarburgerback = document.querySelector('.navbar_burger_back');
const navbarMenu = document.querySelector('.hamburger_nav');

navbarBurger.addEventListener('click', () => {
    navbarMenu.classList.add('active');
});

navbarburgerback.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

var vtuberHamNav = document.getElementById("vtuber");
var dropdownVtuber = document.getElementById('dropdownVtuber');
var vtuberPc = document.getElementById('vtuberPc');
var dropdownVtuberPc = document.getElementById('dropdownVtuberPc');
var dropdownContents = document.querySelectorAll('.dropdown-content');

vtuberHamNav.addEventListener('click', function () {
    vtuberHamNav.classList.toggle('active');
    dropdownVtuber.classList.toggle('active');
});

vtuberPc.addEventListener('click', function () {
    dropdownVtuberPc.classList.toggle('active');
});