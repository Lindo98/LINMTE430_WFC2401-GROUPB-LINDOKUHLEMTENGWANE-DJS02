# DJS02 Project Brief: Whole Number Divider

This project focuses on enhancing a web-based Whole Number Divider application. It's designed to help students apply their knowledge of error handling, guided by specific user stories. Before proceeding, familiarise yourself with the Gherkin syntax, a crucial tool for understanding user stories and requirements. Refer to the provided reading materials for a comprehensive guide. Below is the HTML and JavaScript code for a “Whole Number Divider”. At the moment it only meets two user stories (see below under “Resolved Stories”). Please ensure that it meets all user stories listed below:

This exercise provides user stories in [the Gherkin syntax](https://docs.behat.org/en/v2.5/guides/1.gherkin.html). Please make sure you understand the use and meaning of this syntax before continuing. Check out this resource from [Cucumber](https://cucumber.io/docs/gherkin/reference/).

#### Project Overview

The existing codebase for the Whole Number Divider meets certain user stories but falls short on others. Your task is to modify and extend the code to address all specified user stories, ensuring a robust, user-friendly application.

![alt text](image.png)

#### Starter Code

The provided HTML and JavaScript setup a basic form for inputting two numbers (dividend and divider) and a button to perform the calculation. The current script captures form submissions and displays the division result. However, it lacks validation, error handling, and the logic to meet all user stories.

<h2 style="color:#e67e22">Resolved Stories</h2>

1. **Starting program state**: On page load, the message “No calculation performed” is displayed, indicating no action has been taken yet.
2. **Dividing numbers result in a whole number**: Upon submitting two numbers that divide evenly (e.g., 20 divided by 10), the application correctly displays the whole number result.
3. **Dividing numbers result in a decimal number**: I have used math.floor here to round down the decimals to whole numbers (e.g., when 20 is divided by 3 it is going to give a whole number that is rounded down which is 6).
4. **Validation when values are missing**: I used an if statement to throw an error so that if the values are missing the code doesn't execute and instead throw an error as an inner text
5. **An invalid division should log an error in the console**: I used an if statement as well, if the divider is 0 the division should be done it should throw an error.
6. **Providing anything that is not a number should crash the program**: if the user inputs letters or anything that is not a number then the entire screen will crash and they will have to refresh to try again. I used an if statement here and the results should display/replace the entire document

### Scenario: Starting program state

- GIVEN that the submit button has not been pressed yet
- AND the code has just loaded
- THEN “NO calculation performed” should be displayed at the bottom

### Scenario: Dividing numbers result in a whole number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 10 is entered into the second input
- THEN 2 should be displayed at the bottom

### Scenario: Dividing numbers result in a decimal number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 3 is entered into the second input
- THEN the number 6 with no decimal should be shown

### Scenario: Validation when values are missing

- GIVEN that the submit button is pressed
- WHEN either or both inputs are empty
- THEN the divisions should not be done
- AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.

### Scenario: An invalid division should log an error in the console

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 0 is entered into the second input
- THEN the division should not be done
- AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
- AND an error should be logged in the browser console that shows the call stack
- BUT the program should not crash entirely

### Scenario: Providing anything that is not a number should crash the program

- GIVEN that the submit button is pressed
- WHEN ‘YOLO’ is entered into the first input
- AND ‘+++’ is entered into the second input
- THEN the entire screen should be replaced with “
- AND an error should be logged in the browser console that shows the call stack.

#### Solution

3. **Error Handling**: I used try-catch to validate the inputs to ensure the application handles errors gracefully
4. **Testing**: Tested my application thoroughly with various inputs to ensure it meets all the user stories.
