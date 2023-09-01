// Smooth scroll functionality
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    }
});

