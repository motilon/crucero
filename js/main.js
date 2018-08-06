var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

modalOverlay.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("active");
    modal.classList.add("out");
    modalOverlay.classList.toggle("closed");
})
closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("active");
    modal.classList.add("out");
    modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("active");
    modal.classList.remove("out");
    modalOverlay.classList.toggle("closed");
});