function contactUs (){
    const contactUs = document.createElement("div");
    contactUs.classList.add("contactUs")
    const headline = document.createElement("h1");
    headline.textContent = "Contact Us";
    const subHeading = document.createElement("h2");
    subHeading.textContent = "Reach out to our team!";


    const wrapper = document.createElement("div");
    wrapper.classList.add("infoWrapper")
    const info = document.createElement("div");
    const employee = document.createElement("img");
    employee.classList.add("infoImage")
    employee.src = "../images/employee.jpg"
    const phone = document.createElement("p");
    phone.textContent = "Phone: 555-555-5555";
    const email = document.createElement("p");
    email.textContent = "Email: wine@vineyards.com";

    info.appendChild(phone);
    info.appendChild(email);
    wrapper.appendChild(info);
    wrapper.appendChild(employee);

    contactUs.appendChild(headline);
    contactUs.appendChild(subHeading);
    contactUs.appendChild(wrapper);

    return contactUs;
}

function loadContact (){
    const content = document.getElementById("content");
    content.appendChild(contactUs());
}

export default loadContact;