const openMenu = document.querySelector(".ham-menu");
const closeMenu = document.getElementById("close");
const menu = document.querySelector(".top-menu");

/*-----------open menu--------------------*/
openMenu.addEventListener("click", function() {
    menu.style.boxShadow = "0 5px 25px black";
    menu.style.top = "0";
});
/*--------------close menu----------------*/
closeMenu.addEventListener("click", () => {
    menu.style.top = "-301px";
    menu.style.boxShadow = "none";
})