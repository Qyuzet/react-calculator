# React Calculator

This project is a simple calculator built using React. It allows you to perform basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator features a responsive design that adapts to different screen sizes and is styled with custom CSS for an attractive and user-friendly experience. [TRY NOW!](https://codepen.io/Riki-A/pen/zYgXvmW)

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Clear button to reset the calculator
- Support for decimal points
- Error handling for invalid calculations
- Responsive design that works well on mobile, tablet, and desktop devices

## Demo

You can view the live demo of the calculator on [Codepen](https://codepen.io/Riki-A/pen/zYgXvmW).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Qyuzet/react-calculator.git
   ```

2. Navigate to the project folder:
   ```bash
   cd react-calculator
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Run the project:
   ```bash
   npm start
   ```

   This will start the React development server and you can view the calculator at `http://localhost:3000`.

## How It Works

The calculator app is built using React class components. The core logic of the app is stored in the `Calculator` class, which maintains the state of the display, formula, and other properties. The main functions include:

- `handleNumber(number)`: Adds a number to the display and formula.
- `handleOperator(operator)`: Adds an operator to the formula.
- `handleDecimal()`: Adds a decimal point to the display.
- `handleEquals()`: Evaluates the formula and displays the result.
- `handleClear()`: Clears the display and resets the formula.

The design is implemented using custom CSS to give the calculator a modern and sleek look, with responsive styling for different screen sizes.

## Technologies Used

- React
- JavaScript
- CSS (for styling)
- HTML

## License

This project is open-source and available under the MIT License.

## Author

Created by [Qyuzet](https://github.com/Qyuzet).

## Acknowledgements

Thanks to [React](https://reactjs.org/) for the awesome library and [CSS Tricks](https://css-tricks.com/) for some helpful design tips.
