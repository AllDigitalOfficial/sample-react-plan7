import React, { useState } from "react";

const Deposit = () => {
  // Fetch environment variable values with fallback values
  const depositBgColor = import.meta.env.VITE_DEPOSIT_BG_COLOR || "#111827";
  const textColor = import.meta.env.VITE_DEPOSIT_TEXT_COLOR || "#ffffff";
  const cardBgColor = import.meta.env.VITE_CARD_BG_COLOR || "#192337";
  const buttonColor = import.meta.env.VITE_BUTTON_COLOR || "#007bff";
  const buttonHoverColor = import.meta.env.VITE_BUTTON_HOVER_COLOR || "#0056b3";
  const gradientTextStartColor =
    import.meta.env.VITE_GRADIENT_TEXT_START_COLOR || "rgb(255, 255, 255)";
  const gradientTextEndColor =
    import.meta.env.VITE_GRADIENT_TEXT_END_COLOR || "rgb(255, 255, 255)";
  const inputBgColor = import.meta.env.VITE_INPUT_BG_COLOR || "#2a2a3b";
  const placeholderColor = import.meta.env.VITE_PLACEHOLDER_COLOR || "white";
  const smallTextColor = import.meta.env.VITE_SMALL_TEXT_COLOR || "#f5f5f5";
  const labelColor = import.meta.env.VITE_LABEL_COLOR || "#ffffff";
  const buttonTextColor = import.meta.env.VITE_BUTTON_TEXT_COLOR || "#ffffff";
  const gradientTransparentColor =
    import.meta.env.VITE_GRADIENT_TRANSPARENT_COLOR || "transparent";

  const minDeposit = parseFloat(import.meta.env.VITE_MIN_DEPOSIT) || 0.5;
  const maxDeposit = parseFloat(import.meta.env.VITE_MAX_DEPOSIT) || 1000;
  const depositIncome = parseFloat(import.meta.env.VITE_DEPOSIT_INCOME) || 0.0;
  const percentRate = parseFloat(import.meta.env.VITE_PERCENT_RATE) || 4;
  const totalIncome = parseFloat(import.meta.env.VITE_TOTAL_INCOME) || 0.0;

  const [depositAmount, setDepositAmount] = useState<string>("");
  const [perDayIncome, setPerDayIncome] = useState<number>(depositIncome);
  const [totalIncomeState, setTotalIncomeState] = useState<number>(totalIncome);

  const handleDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    setDepositAmount(event.target.value);

    if (value >= minDeposit && value <= maxDeposit) {
      const dailyIncome = (value * percentRate) / 100;
      setPerDayIncome(dailyIncome);
      setTotalIncomeState(dailyIncome * 30);
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
        minHeight: "30vh",
        paddingTop: "50px",
      }}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div
              className="card p-4 shadow-lg h-100"
              style={{
                backgroundColor: cardBgColor,
                borderRadius: "15px",
                color: textColor,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="d-flex flex-column mb-3">
                <div className="d-flex justify-content-between mb-3">
                  <h4
                    className="fw-bold"
                    style={{ fontSize: "1.25rem", color: labelColor }}
                  >
                    Per Day:
                  </h4>
                  <h4
                    className="fw-bold"
                    style={{ fontSize: "1.25rem", color: labelColor }}
                  >
                    Percent Rate:
                  </h4>
                  <h4
                    className="fw-bold"
                    style={{ fontSize: "1.25rem", color: labelColor }}
                  >
                    Total Income:
                  </h4>
                </div>

                <div className="d-flex justify-content-between">
                  <p id="perDayIncome" className="fs-4 fw-bold">
                    {perDayIncome.toFixed(3)} BNB
                  </p>
                  <p className="fs-5 fw-bold">{percentRate}% per day</p>
                  <p id="totalIncome" className="fs-4 fw-bold">
                    {totalIncomeState.toFixed(3)} BNB
                  </p>
                </div>
              </div>

              <small style={{ fontSize: "1rem", color: smallTextColor }}>
                * Withdrawal at any time you want!
              </small>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="card p-4 shadow-lg h-100"
              style={{
                backgroundColor: cardBgColor,
                borderRadius: "15px",
                color: textColor,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3
                className="fw-bold mb-4"
                style={{
                  backgroundImage: `linear-gradient(to right, ${gradientTextStartColor}, ${gradientTextEndColor})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: gradientTransparentColor,
                  fontSize: "1.75rem",
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
                    backgroundColor: inputBgColor,
                    color: textColor,
                    border: "none",
                    fontSize: "1.125rem",
                  }}
                  value={depositAmount}
                  onChange={handleDepositChange}
                  min={minDeposit}
                  max={maxDeposit}
                  step="0.01"
                />
              </div>

              <p
                className="mb-4"
                style={{ fontSize: "1rem", color: smallTextColor }}
              >
                Minimum {minDeposit} BNB | Maximum {maxDeposit} BNB
              </p>

              <button
                id="sendTransaction"
                className="btn"
                style={{
                  backgroundColor: buttonColor,
                  color: buttonTextColor,
                  width: "auto",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Make Deposit
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          #depositAmount::placeholder {
            color: ${placeholderColor};
          }

          .btn:hover {
            background-color: ${buttonHoverColor};
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Deposit;
