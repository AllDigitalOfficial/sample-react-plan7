import type React from "react";
import { useState } from "react";

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
  const placeholderColor =
    import.meta.env.VITE_PLACEHOLDER_TEXT_COLOR || "rgb(128, 128, 128)";
  const smallTextColor = import.meta.env.VITE_SMALL_TEXT_COLOR || "#f5f5f5";
  const labelColor = import.meta.env.VITE_LABEL_COLOR || "#ffffff";
  const headingTextColor = import.meta.env.VITE_HEADING_TEXT_COLOR || "#ffffff"; // Heading color
  const incomeValueTextColor =
    import.meta.env.VITE_INCOME_VALUE_TEXT_COLOR || "#c8c8c8"; // Income value color
  const inputValueTextColor =
    import.meta.env.VITE_INPUT_VALUE_TEXT_COLOR || "#ffffff"; // Input value color
  const buttonTextColor = import.meta.env.VITE_BUTTON_TEXT_COLOR || "#ffffff"; // Button text color
  const withdrawalText =
    import.meta.env.VITE_WITHDRAWAL_TEXT ||
    "* Withdrawal at any time you want!";
  const withdrawalTextColor =
    import.meta.env.VITE_WITHDRAWAL_TEXT_COLOR || "#ffffff"; // Withdrawal text color
  const withdrawalTextMargin =
    import.meta.env.VITE_WITHDRAWAL_TEXT_MARGIN || "20px"; // Margin for withdrawal text

  const minDeposit = Number.parseFloat(import.meta.env.VITE_MIN_DEPOSIT) || 0.5;
  const maxDeposit =
    Number.parseFloat(import.meta.env.VITE_MAX_DEPOSIT) || 1000;
  const depositIncome =
    Number.parseFloat(import.meta.env.VITE_DEPOSIT_INCOME) || 0.0;
  const percentRate = Number.parseFloat(import.meta.env.VITE_PERCENT_RATE) || 4;
  const totalIncome =
    Number.parseFloat(import.meta.env.VITE_TOTAL_INCOME) || 0.0;

  const [depositAmount, setDepositAmount] = useState<string>(""); // Deposit amount input
  const [perDayIncome, setPerDayIncome] = useState<number>(depositIncome); // Per day income
  const [totalIncomeState, setTotalIncomeState] = useState<number>(totalIncome); // Total income

  const handleDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(event.target.value) || 0;
    setDepositAmount(event.target.value);

    // Calculate per day income and total income based on deposit value
    if (value >= minDeposit && value <= maxDeposit) {
      const dailyIncome = (value * percentRate) / 100;
      setPerDayIncome(dailyIncome);
      setTotalIncomeState(dailyIncome * 30); // Assuming 30 days for total income
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
          {/* Left Section - Deposit Information (Responsive Cards on Mobile) */}
          <div className="col-lg-6">
            <div
              className="card p-4 shadow-lg h-100"
              style={{
                backgroundColor: cardBgColor,
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Desktop view */}
              <div className="d-none d-lg-block">
                <div className="d-flex justify-content-between mb-3">
                  <h4 style={{ color: headingTextColor }}>Per Day:</h4>
                  <h4 style={{ color: headingTextColor }}>Percent Rate:</h4>
                  <h4 style={{ color: headingTextColor }}>Total Income:</h4>
                </div>
                <div className="d-flex justify-content-between">
                  <p id="perDayIncome" style={{ color: incomeValueTextColor }}>
                    {perDayIncome.toFixed(3)} BNB
                  </p>
                  <p style={{ color: incomeValueTextColor }}>
                    {percentRate}% per day
                  </p>
                  <p id="totalIncome" style={{ color: incomeValueTextColor }}>
                    {totalIncomeState.toFixed(3)} BNB
                  </p>
                </div>
              </div>

              {/* Mobile view */}
              <div className="d-lg-none">
                {[
                  {
                    label: "Per Day:",
                    value: `${perDayIncome.toFixed(3)} BNB`,
                  },
                  { label: "Percent Rate:", value: `${percentRate}% per day` },
                  {
                    label: "Total Income:",
                    value: `${totalIncomeState.toFixed(3)} BNB`,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="card mb-3"
                    style={{ backgroundColor: cardBgColor }}
                  >
                    <div className="card-body">
                      <h5 style={{ color: headingTextColor }}>{item.label}</h5>
                      <p style={{ color: incomeValueTextColor }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <small style={{ color: withdrawalTextColor, marginTop: "30px" }}>
                {withdrawalText}
              </small>
            </div>
          </div>

          {/* Right Section - Deposit Input Form */}
          <div className="col-lg-6">
            <div
              className="card p-4 shadow-lg h-100"
              style={{
                backgroundColor: cardBgColor,
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3 style={{ color: headingTextColor }}>Make Deposit</h3>
              <div className="input-group mb-3">
                <input
                  id="depositAmount"
                  type="number"
                  className="form-control"
                  placeholder="Enter BNB"
                  style={{
                    backgroundColor: inputBgColor,
                    color: inputValueTextColor,
                    border: "none",
                  }}
                  value={depositAmount}
                  onChange={handleDepositChange}
                  min={minDeposit}
                  max={maxDeposit}
                  step="0.01"
                />
              </div>
              <p style={{ color: smallTextColor }}>
                Minimum {minDeposit} BNB | Maximum {maxDeposit} BNB
              </p>
              <button
                id="sendTransaction"
                className="btn btn-lg"
                style={{
                  backgroundColor: buttonColor,
                  color: buttonTextColor,
                }}
              >
                Make Deposit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
