import React from "react";

const Deposit = () => {
  // Environment variable values (or static defaults here)
  const depositBgColor = "#121212"; // Dark theme background
  const cardBgColor = "#1e1e2d"; // Darker card color
  const textColor = "#ffffff"; // White text for contrast
  const buttonColor = "#007bff"; // Default button color
  const gradientText = `linear-gradient(to right, #6a11cb, #2575fc)`;
  const minDeposit = 0.05;
  const maxDeposit = 1000;
  const perDayIncome = 0.0;
  const percentRate = 4; // Default percentage rate
  const totalIncome = 0.0;

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
                {/* Left side: Labels */}
                <div className="d-flex justify-content-between mb-3">
                  <h4 className="fw-bold" style={{ fontSize: "1.25rem" }}>Per Day:</h4>
                  <h4 className="fw-bold" style={{ fontSize: "1.25rem" }}>Percent Rate:</h4>
                  <h4 className="fw-bold" style={{ fontSize: "1.25rem" }}>Total Income:</h4>
                </div>

                {/* Right side: Values */}
                <div className="d-flex justify-content-between">
                  <p id="perDayIncome" className="fs-4 fw-bold">{perDayIncome} BNB</p>
                  <p className="fs-5 fw-bold">{percentRate}% per day</p>
                  <p id="totalIncome" className="fs-4 fw-bold">{totalIncome} BNB</p>
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
                  backgroundImage: gradientText,
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
            background-color: #0056b3; /* Darker shade on hover */
            transform: scale(1.05); /* Slightly enlarge the button on hover */
          }
        `}
      </style>
    </div>
  );
};

export default Deposit;
