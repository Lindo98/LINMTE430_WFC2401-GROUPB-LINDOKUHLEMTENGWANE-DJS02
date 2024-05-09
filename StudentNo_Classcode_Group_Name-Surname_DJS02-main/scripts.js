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
    } else if (divider == 0) {
      throw new Error(
        "Division not performed. Invalid number provided. Try again"
      );
    }

    if (isNaN(dividend) || isNaN(divider)) {
      return (document.body.innerHTML =
        "Something critical went wrong. Please reload the page");
    }
    const roundedResult = Math.floor(resultValue);
    result.innerText = roundedResult;
  } catch (error) {
    result.innerText = error.message;
  }
});
