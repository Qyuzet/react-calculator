import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      formula: "",
      evaluated: false,
      currentValue: "0",
      prevValue: null,
      operator: null,
    };
  }

  handleNumber = (number) => {
    const { display, formula, evaluated } = this.state;

    if (evaluated) {
      this.setState({
        display: number,
        formula: number,
        evaluated: false,
      });
    } else {
      if (display === "0") {
        this.setState({
          display: number,
          formula: formula + number,
        });
      } else {
        this.setState({
          display: display + number,
          formula: formula + number,
        });
      }
    }
  };

  handleOperator = (operator) => {
    const { formula, display, evaluated } = this.state;

    if (evaluated) {
      this.setState({
        formula: display + operator,
        evaluated: false,
        display: operator,
      });
    } else {
      if (/[-+*/]$/.test(formula)) {
        // Handle consecutive operators (retain only the last one)
        if (operator === "-" && !/\d[-+*/]-$/.test(formula)) {
          // Allow '-' to indicate a negative number
          this.setState({
            formula: formula + operator,
          });
        } else {
          // Replace the last operator with the new one
          this.setState({
            formula: formula.replace(/[-+*/]+$/, operator),
          });
        }
      } else {
        this.setState({
          formula: formula + operator,
        });
      }
      this.setState({
        display: operator,
      });
    }
  };

  handleDecimal = () => {
    const { display, formula, evaluated } = this.state;

    if (evaluated) {
      this.setState({
        display: "0.",
        formula: "0.",
        evaluated: false,
      });
    } else {
      if (!display.includes(".")) {
        this.setState({
          display: display + ".",
          formula: formula + ".",
        });
      }
    }
  };

  handleEquals = () => {
    let { formula } = this.state;

    if (/[+\-*/]$/.test(formula)) {
      formula = formula.slice(0, -1);
    }

    try {
      const result = Number(new Function("return " + formula)().toFixed(4));
      this.setState({
        display: String(result),
        formula: formula + "=" + result,
        evaluated: true,
      });
    } catch (error) {
      this.setState({
        display: "Error",
        formula: "",
        evaluated: true,
      });
    }
  };

  handleClear = () => {
    this.setState({
      display: "0",
      formula: "",
      evaluated: false,
    });
  };

  render() {
    const { display } = this.state;

    return (
      <div className="calculator-container">
        <div className="calculator-display" id="display">
          {display}
        </div>

        <div className="calculator-grid">
          <button
            id="clear"
            onClick={this.handleClear}
            className="calculator-button button-clear"
          >
            AC
          </button>
          <button
            id="subtract"
            onClick={() => this.handleOperator("-")}
            className="calculator-button button-operator"
          >
            -
          </button>
          <button
            id="multiply"
            onClick={() => this.handleOperator("*")}
            className="calculator-button button-operator"
          >
            x
          </button>
          <button
            id="divide"
            onClick={() => this.handleOperator("/")}
            className="calculator-button button-operator"
          >
            /
          </button>

          <button
            id="seven"
            onClick={() => this.handleNumber("7")}
            className="calculator-button button-number"
          >
            7
          </button>
          <button
            id="eight"
            onClick={() => this.handleNumber("8")}
            className="calculator-button button-number"
          >
            8
          </button>
          <button
            id="nine"
            onClick={() => this.handleNumber("9")}
            className="calculator-button button-number"
          >
            9
          </button>
          <button
            id="add"
            onClick={() => this.handleOperator("+")}
            className="calculator-button button-operator"
          >
            +
          </button>

          <button
            id="four"
            onClick={() => this.handleNumber("4")}
            className="calculator-button button-number"
          >
            4
          </button>
          <button
            id="five"
            onClick={() => this.handleNumber("5")}
            className="calculator-button button-number"
          >
            5
          </button>
          <button
            id="six"
            onClick={() => this.handleNumber("6")}
            className="calculator-button button-number"
          >
            6
          </button>
          <button
            id="equals"
            onClick={this.handleEquals}
            className="calculator-button button-equals"
          >
            =
          </button>

          <button
            id="one"
            onClick={() => this.handleNumber("1")}
            className="calculator-button button-number"
          >
            1
          </button>
          <button
            id="two"
            onClick={() => this.handleNumber("2")}
            className="calculator-button button-number"
          >
            2
          </button>
          <button
            id="three"
            onClick={() => this.handleNumber("3")}
            className="calculator-button button-number"
          >
            3
          </button>

          <button
            id="zero"
            onClick={() => this.handleNumber("0")}
            className="calculator-button button-number button-zero"
          >
            0
          </button>
          <button
            id="decimal"
            onClick={this.handleDecimal}
            className="calculator-button button-number"
          >
            .
          </button>
        </div>
      </div>
    );
  }
}

//React Parent Component
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
