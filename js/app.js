(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


window.onload = function () {
    document.getElementById("container").style.display = "none";
    document.getElementById("content").style.display = "block";
}
$(window).load(function () {
    $('#loading').fadeOut();
    $('#loading-img').delay(150).fadeOut('slow');
}), 4000;