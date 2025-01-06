// const navBtn = document.querySelector('#navbar-toggler');
// const navDiv = document.querySelector('.navbar-collapse');

// navBtn.addEventListener('click', () => {
//     navDiv.classList.toggle('showNav');
// });

// // stopping animation and transition during window resizing
// let resizeTimer;
// window.addEventListener('resize', () => {
//     document.body.classList.add('resize-animation-stopper');
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         document.body.classList.remove('resize-animation-stopper');
//     }, 400);
// });

document.addEventListener("DOMContentLoaded", function () {
    const searchInputField = document.getElementById("search-input");
    const errorElement = document.createElement("p");
    errorElement.id = "search-error";
    errorElement.style.color = "red";
    errorElement.style.display = "none";
    searchInputField.insertAdjacentElement("afterend", errorElement);

    const validRoutes = ["home", "over", "skills", "projects", "contact"];

    searchInputField.addEventListener("input", function () {
        const searchInput = this.value.toLowerCase().trim();
        const suggestions = validRoutes.filter(route => route.startsWith(searchInput));

        if (!validRoutes.includes(searchInput)) {
            this.style.borderColor = "red";
            errorElement.textContent = suggestions.length > 0
                ? `Bedoelde je: ${suggestions.join(", ")}?`
                : "Ongeldige zoekterm!";
            errorElement.style.display = "block";
        } else {
            this.style.borderColor = "green";
            errorElement.style.display = "none";
        }
    });

    searchInputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const searchInput = this.value.toLowerCase().trim();

            if (validRoutes.includes(searchInput)) {
                window.location.href = `/${searchInput}/`;
            } else {
                alert("Ongeldige zoekterm");
            }
        }
    });
});
