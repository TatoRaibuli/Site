const joinBtn = document.querySelector("#join-btn")
const ty = document.querySelector(".thanks")
joinBtn.addEventListener("click", (event) => {
    if (document.querySelector("#email-input").value.trim() === "") {
        event.preventDefault();


    } else {
        ty.classList.add("received");

    }
});