import React, { useState } from "react";

const Deposit = () => {
  // Fetch environment variable values
  const depositBgColor = import.meta.env.VITE_DEPOSIT_BG_COLOR 
  const textColor = import.meta.env.VITE_DEPOSIT_TEXT_COLOR 
  const cardBgColor = import.meta.env.VITE_CARD_BG_COLOR 
  const buttonColor = import.meta.env.VITE_BUTTON_COLOR 
  const buttonHoverColor = import.meta.env.VITE_BUTTON_HOVER_COLOR 
  const gradientTextStartColor = import.meta.env.VITE_GRADIENT_TEXT_START_COLOR 
  const gradientTextEndColor = import.meta.env.VITE_GRADIENT_TEXT_END_COLOR 

  const minDeposit = parseFloat(import.meta.env.VITE_MIN_DEPOSIT) 
  const maxDeposit = parseFloat(import.meta.env.VITE_MAX_DEPOSIT) 
  const depositIncome = parseFloat(import.meta.env.VITE_DEPOSIT_INCOME) 
  const percentRate = parseFloat(import.meta.env.VITE_PERCENT_RATE) 
  const totalIncome = parseFloat(import.meta.env.VITE_TOTAL_INCOME) 

  // State management for deposit, perDayIncome, and totalIncome
  const [depositAmount, setDepositAmount] = useState<string>(""); // Start with an empty string
  const [perDayIncome, setPerDayIncome] = useState<number>(depositIncome);
  const [totalIncomeState, setTotalIncomeState] = useState<number>(totalIncome);

  // Function to handle deposit input change with event typed correctly
  const handleDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    setDepositAmount(event.target.value); // Update the input value as a string

    // Ensure deposit is within the allowed range
    if (value >= minDeposit && value <= maxDeposit) {
      const dailyIncome = (value * percentRate) / 100; // Calculate per day income
      setPerDayIncome(dailyIncome);
      setTotalIncomeState(dailyIncome * 30); // Total income for 30 days
    } else {
      setPerDayIncome(0);
      setTotalIncomeState(0);
    }
  };

  return (
    <div
      id="deposit"
      className="deposit-area py-5"
      style={{
        backgroundColor: depositBgColor,
        minHeight: "60vh",
        paddingTop: "50px", // Adds spacing to the top for a cleaner look
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Left Card: Deposit Summary */}
          <div className="col-lg-6">
            <div
              className="card p-4 shadow-lg h-100"
              style={{
                backgroundColor: cardBgColor,
                borderRadius: "15px",
                color: textColor,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)", // More prominent shadow
              }}
            >
              <div className="d-flex flex-column mb-3">
                {/* Labels */}
                <div className="d-flex justify-content-between mb-3">
                  <h4 className="fw-bold" style={{ fontSize: "1.25rem" }}>Per Day:</h4>
                  <h4 className="fw-bold" style={{ fontSize: "1.25rem" }}>Percent Rate:</h4>
                  <h4 className="fw-bold" style={{ fontSize: "1.25rem" }}>Total Income:</h4>
                </div>

                {/* Values */}
                <div className="d-flex justify-content-between">
                  <p id="perDayIncome" className="fs-4 fw-bold">{perDayIncome.toFixed(3)} BNB</p>
                  <p className="fs-5 fw-bold">{percentRate}% per day</p>
                  <p id="totalIncome" className="fs-4 fw-bold">{totalIncomeState.toFixed(3)} BNB</p>
                </div>
              </div>

              <small className="text-white" style={{ fontSize: "1rem" }}>
                * Withdrawal at any time you want!
              </small>
            </div>
          </div>

          {/* Right Card: Deposit Form */}
          <div className="col-lg-6">
            <div
              className="card p-4 shadow-lg h-100"
              style={{
                backgroundColor: cardBgColor,
                borderRadius: "15px",
                color: textColor,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)", // More prominent shadow
              }}
            >
              <h3
                className="fw-bold mb-4"
                style={{
                  backgroundImage: `linear-gradient(to right, ${gradientTextStartColor}, ${gradientTextEndColor})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "1.75rem", // Slightly bigger font for better emphasis
                }}
              >
                Make Deposit
              </h3>

              <div className="input-group mb-3">
                <input
                  id="depositAmount"
                  type="number"
                  className="form-control"
                  placeholder="Enter BNB"
                  style={{
                    backgroundColor: "#2a2a3b",
                    color: textColor,
                    border: "none",
                    fontSize: "1.125rem", // Slightly larger font for input
                  }}
                  value={depositAmount}
                  onChange={handleDepositChange}
                  min={minDeposit}
                  max={maxDeposit}
                  step="0.01" // Set decimal precision
                />
              </div>

              <p className="text-white mb-4" style={{ fontSize: "1rem" }}>
                Minimum {minDeposit} BNB | Maximum {maxDeposit} BNB
              </p>

              <button
                id="sendTransaction"
                className="btn"
                style={{
                  backgroundColor: buttonColor,
                  color: "#fff",
                  width: "auto", // Adjusted width for a smaller button
                  padding: "8px 16px", // Reduced padding to make it smaller
                  borderRadius: "5px",
                  fontSize: "1rem", // Smaller font for the button
                  transition: "all 0.3s ease-in-out", // Button hover effect
                }}
              >
                Make Deposit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Style block for placeholder and hover effect */}
      <style>
        {`
          #depositAmount::placeholder {
            color: white; /* Set placeholder text color to white */
          }

          .btn:hover {
            background-color: ${buttonHoverColor}; /* Hover color from .env */
            transform: scale(1.05); /* Slightly enlarge the button on hover */
          }
        `}
      </style>
    </div>
  );
};

export default Deposit;
