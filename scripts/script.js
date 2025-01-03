const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

document.getElementById("search-input").addEventListener("input", function () {
    const searchInput = this.value.toLowerCase().trim();
    const validRoutes = ["home", "over", "skills", "projects", "contact"];

    if (!validRoutes.includes(searchInput)) {
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "green";
    }
});

document.getElementById("search-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        document.getElementById("search-button").click();
    }
});
