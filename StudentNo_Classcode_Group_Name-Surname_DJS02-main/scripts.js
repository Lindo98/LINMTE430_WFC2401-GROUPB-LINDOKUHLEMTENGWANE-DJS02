const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const resultValue = dividend / divider;

  const roundedResult = Math.round(resultValue);
  result.innerText = roundedResult;
});
