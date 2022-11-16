import loadHome from "./home";
import loadMenu from "./menu"
import loadContact from "./contact";

function heading (){
    const header = document.createElement("div");
    header.classList.add("header")
    const logo = document.createElement("h1");
    logo.textContent = "Grand Wine";
    const menuItems = ["Home", "Our Menu", "Contact Us"];
    const navMenu = document.createElement("ul");
    navMenu.classList.add("navMenu")
    menuItems.forEach(element => {
        const item = document.createElement("li");
        item.textContent = element;
        navMenu.appendChild(item);
    })

    header.appendChild(logo);
    header.appendChild(navMenu)

    return header
}
function loadMe (item){
    const content = document.getElementById("content");
    content.appendChild(item);
}

loadMe(heading());

loadHome();
loadMenu();
loadContact();