const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
//const errorMessage = document.querySelector("[data-error]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const resultValue = dividend / divider;

  try {
    if (dividend === "" || divider === "") {
      throw new Error(
        "Division not performed. Both values are required in inputs. Try again"
      );
    } else if (dividend == 20 || divider == 20) {
      throw new Error(
        "Division not performed. Invalid number provided. Try again"
      );
    } else if (dividend 
    )

    const roundedResult = Math.floor(resultValue);
    result.innerText = roundedResult;
  } catch (error) {
    result.innerText = error.message;
  }
});
