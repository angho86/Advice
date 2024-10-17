const text = document.getElementById("adviceText");

function callAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then((headerRawData) => headerRawData.json())
    .then((data) => {
        console.log(data.slip.advice);
        text.innerText = data.slip.advice;
    });
}