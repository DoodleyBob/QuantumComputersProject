const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

$(offScreenMenu).hide();
hamMenu.addEventListener("click", () => {
    $(offScreenMenu).show("fast")
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});



