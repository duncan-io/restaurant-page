function menu (){

    const menuList = document.createElement("div");
    menuList.classList.add("menuList")
    const items = []
    const foodFactory = (itemName, price, image) => {
        return {itemName, price, image}
    };

    const pinotNoir = foodFactory("Pinot Noir", 19.99, "../images/pinotNoir.jpg");
    const merlot = foodFactory("Merlot", 24.99, "../images/merlot.jpg");
    const savingonBlanc = foodFactory("Savignon Blanc", 15.99, "../images/savingonBlanc.jpg");
    const pinotGrigio = foodFactory("Pinot Grigio", 12.99, "../images/pinotGrigio.jpg")
    const salami = foodFactory("Salami", 10, "../images/salami.jpg")
    const cheddar = foodFactory("Cheddar", 5, "../images/cheddar.jpg")
    items.push(pinotNoir, merlot, savingonBlanc, pinotGrigio, salami, cheddar)

    items.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card")
        const wineImage = document.createElement("img");
        wineImage.src = element.image;
        wineImage.classList.add("thumbnail");
        const wrapper = document.createElement("div");
        wrapper.classList.add("wineWrapper");
        const wineName = document.createElement("h3");
        wineName.textContent = element.itemName;
        const winePrice = document.createElement("p");
        winePrice.textContent = `${element.price}`;
        
        wrapper.appendChild(wineName);
        wrapper.appendChild(winePrice);
        card.appendChild(wineImage);
        card.appendChild(wrapper);
        menuList.appendChild(card);
    })

    return menuList;

}

function loadMenu(){
    const content = document.getElementById("content");
    content.appendChild(menu());
}

export default loadMenu