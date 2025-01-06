document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});

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
