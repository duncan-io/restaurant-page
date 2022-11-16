import loadHome from "./home";
import loadMenu from "./menu"
import loadContact from "./contact";

(function loadNav (){
    const pages = [loadHome, loadMenu, loadContact]
    function heading (){
        const header = document.createElement("div");
        header.classList.add("header")
        const logo = document.createElement("h1");
        logo.textContent = "Grand Wine";
        const menuItems = ["Home", "Our Menu", "Contact Us"];
        const navMenu = document.createElement("ul");
        navMenu.classList.add("navMenu")
        menuItems.forEach(element => {
            const item = document.createElement("button");
            item.onclick = ()=>{
                const content = document.getElementById("content");
                while (content.firstChild) {
                  content.removeChild(content.lastChild);
                }
                let index = menuItems.indexOf(element);
                pages[index]();
            }
            item.textContent = element;
            navMenu.appendChild(item);
        })
    
        header.appendChild(logo);
        header.appendChild(navMenu)
    
        return header
    }
   



const nav = document.getElementById("nav");
nav.appendChild(heading());
})();


loadHome();

(function loadFooter (){
    function footer(){
        const footer = document.createElement("div");
        const identification = document.createElement("p");
        identification.textContent = "Created by duncan-io";
        footer.appendChild(identification);
    
        return footer;
    }
    const footer1 = document.getElementById("footer");
    footer1.appendChild(footer());
})();