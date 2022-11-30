const firstState = document.querySelector(".first-state");
const secondState = document.querySelector(".second-state");
const btnSubmit = document.getElementById("btn-submit");
const rateAgain = document.getElementById("rate-again");
const valuesSelected = document.querySelectorAll(".note-selected");
const sendChoice = document.getElementById("rating")

btnSubmit.addEventListener("click", () => {
    firstState.classList.add("hidden")
    secondState.classList.remove("hidden")
})

rateAgain.addEventListener("click", () => {
    secondState.classList.add("hidden")
    firstState.classList.remove("hidden")
})

valuesSelected.forEach((value) => {
    value.addEventListener("click", () => {
        sendChoice.innerHTML = value.innerHTML
    })
})



