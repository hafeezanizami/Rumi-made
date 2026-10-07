/* =========================
   RUMI MADE EMAIL
========================= */

// IMPORTANT:
// Put your Rumi Made business email here.
// Do NOT put your personal phone number.

const businessEmail = "rumimade3@gmail.com";



/* =========================
   ORDER PRODUCT
========================= */

function orderProduct(productName, price) {

    const subject =
        `Order Request - ${productName}`;


    const body =

        `Hi Rumi Made!\n\n` +

        `I would like to order:\n` +

        `Product: ${productName}\n` +

        `Price: ₹${price}\n` +

        `Quantity: \n` +

        `Colour/Design: \n\n` +

        `Please let me know if it is available. ♡`;


    const mailtoLink =

        `mailto:${businessEmail}` +

        `?subject=${encodeURIComponent(subject)}` +

        `&body=${encodeURIComponent(body)}`;


    window.location.href =
        mailtoLink;

}



/* =========================
   GENERAL CONTACT
========================= */

function openEmail() {

    const subject =
        "Rumi Made - Product Enquiry";


    const body =

        `Hi Rumi Made!\n\n` +

        `I would like to know more about your handmade products. ♡`;


    const mailtoLink =

        `mailto:${businessEmail}` +

        `?subject=${encodeURIComponent(subject)}` +

        `&body=${encodeURIComponent(body)}`;


    window.location.href =
        mailtoLink;

}



/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const navbar =
        document.querySelector(".navbar");


    navbar.classList.toggle("active");

}