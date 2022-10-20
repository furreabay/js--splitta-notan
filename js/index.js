let sum = document.getElementById("sum");
let numberOfFriends = document.getElementById("numberOfFriends");
let tip = document.getElementById("tip");

let showSum = document.querySelector("#showSum");
let htmlResult = document.querySelector("#result");
let errorMessage = document.querySelector("#errorMessage");

let result;

function calculate() {
    if (showSum.classList.contains("hide") && (sum.value.length != 0 && numberOfFriends.value.length != 0)) {
        showSum.classList.remove("hide");
        errorMessage.classList.add("hide");
    } else if (sum.value.length == 0 || numberOfFriends.value.length == 0) {
        showSum.classList.add("hide");
        errorMessage.classList.remove("hide");
    }
    result = (Number(sum.value) + Number(tip.value)) / Number(numberOfFriends.value);
    htmlResult.textContent = result;
}