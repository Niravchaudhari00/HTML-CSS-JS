console.log("Modal App");

let modalContainer = document.querySelector(".modal-container")
let overlay = document.querySelector(".overlay");
function openModal() {
     // console.log(modalContainer);/
     modalContainer.classList.add("active")
     overlay.classList.add("overlayActive")
}
 
function closeModal() {
     modalContainer.classList.remove("active")
     overlay.classList.remove("overlayActive")
}