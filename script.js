/* =========================
   Z PLAST JAVASCRIPT
========================= */


// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("active");

}


// =========================
// PRODUCT ENQUIRY
// =========================

function enquire(productName) {

    const phoneNumber = "91XXXXXXXXXX";

    const message =
        "Hello Z PLAST,%0A%0AI am interested in your " +
        productName +
        ".%0A%0APlease share more details.";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;

    window.open(whatsappURL, "_blank");

}


// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================
// CLOSE MOBILE MENU
// =========================

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector("nav").classList.remove("active");

    });

});