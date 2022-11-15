function homePage (){
    const home = document.createElement("div");
    home.classList.add("home-page")
    const headline = document.createElement("h1");
    headline.appendChild(document.createTextNode("The Largest Wine and Charcuterie selection in the US"));

    const heroImage = document.createElement("img");
    heroImage.src = "../images/wineStore.jpg";
    heroImage.classList.add("hero-image")
    const tagline = document.createElement("h2");
    tagline.appendChild(document.createTextNode("since 2022"));

    home.appendChild(headline);
    home.appendChild(heroImage);
    home.appendChild(tagline);
    
    return home;
}

function loadHome (){
    const content = document.getElementById("content");
    content.appendChild(homePage());
}

export default loadHome;