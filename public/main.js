const quoteContainer = document.querySelector(".quote");
const button = document.querySelector("button");
let bgNumber = backgroundNumber();

button.addEventListener("click", () => {
  bgNumber = backgroundNumber();
  getQuote(`background-${bgNumber}`);
});

getQuote(`background-${bgNumber}`);

function getQuote(background) {
  fetch("http://localhost:8822/quote")
    .then((response) => response.json())
    .then((result) => {
      if (background)
        document.body.style.backgroundImage = `url(${background}.webp)`;
      quoteContainer.textContent = result.quote;
    })
    .catch((error) => console.log(error));
}

function backgroundNumber() {
  return Math.ceil(Math.random() * 5);
}
