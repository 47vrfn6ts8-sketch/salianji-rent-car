// Menu mobile
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Rezervimi i makinës
const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const car = document.querySelector("#car").value;
        const date = document.querySelector("#date").value;

        alert(
            "Rezervimi u krye me sukses!\n\n" +
            "Emri: " + name + "\n" +
            "Makina: " + car + "\n" +
            "Data: " + date
        );
    });
}
