import type React from "react";
import { useState } from "react";

const Deposit = () => {
  const env = import.meta.env;

  const styles = {
    depositBgColor: env.VITE_DEPOSIT_BG_COLOR || "#111827",
    cardBgColor: env.VITE_DEPOSIT_CARD_BG_COLOR || "#192337",
    buttonColor: env.VITE_DEPOSIT_BUTTON_COLOR || "#007bff",
    inputBgColor: env.VITE_DEPOSIT_INPUT_BG_COLOR || "rgb(255, 255, 255)",
    headingTextColor:
      env.VITE_DEPOSIT_HEADING_TEXT_COLOR || "rgb(255, 255, 255)",
    incomeValueTextColor:
      env.VITE_DEPOSIT_INCOME_VALUE_TEXT_COLOR || "rgb(200, 200, 200)",
    smallTextColor: env.VITE_DEPOSIT_SMALL_TEXT_COLOR || "#FF0000",
    buttonTextColor: env.VITE_DEPOSIT_BUTTON_TEXT_COLOR || "#ffffff",
    withdrawalTextColor:
      env.VITE_DEPOSIT_WITHDRAWAL_TEXT_COLOR || "rgb(255, 255, 255)",
  };

  const withdrawalText =
    env.VITE_DEPOSIT_WITHDRAWAL_TEXT || "* Withdrawal at any time you want!";
  const minDeposit = Number.parseFloat(env.VITE_DEPOSIT_MIN_DEPOSIT) || 0.5;
  const maxDeposit = Number.parseFloat(env.VITE_DEPOSIT_MAX_DEPOSIT) || 1000;
  const percentRate = Number.parseFloat(env.VITE_DEPOSIT_PERCENT_RATE) || 4;
  const initialDepositIncome =
    Number.parseFloat(env.VITE_DEPOSIT_INCOME) || 0.0;
  const initialTotalIncome =
    Number.parseFloat(env.VITE_DEPOSIT_TOTAL_INCOME) || 0.0;

  const [depositAmount, setDepositAmount] = useState<string>("");
  const [perDayIncome, setPerDayIncome] =
    useState<number>(initialDepositIncome);
  const [totalIncome, setTotalIncome] = useState<number>(initialTotalIncome);

  const handleDepositChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(event.target.value) || 0;
    setDepositAmount(event.target.value);

    if (value >= minDeposit && value <= maxDeposit) {
      const dailyIncome = (value * percentRate) / 100;
      setPerDayIncome(dailyIncome);
      setTotalIncome(dailyIncome * 30);
    } else {
      setPerDayIncome(0);
      setTotalIncome(0);
    }
  };

  const valueItems = [
    { label: "Per Day:", value: `${perDayIncome.toFixed(3)} BNB` },
    { label: "Percent Rate:", value: `${percentRate}% per day` },
    { label: "Total Income:", value: `${totalIncome.toFixed(3)} BNB` },
  ];

  // Define common card styles
  const cardStyles = {
    backgroundColor: styles.cardBgColor,
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  };

  return (
    <div
      id="deposit"
      className="deposit-area py-5"
      style={{
        backgroundColor: styles.depositBgColor,
        minHeight: "30vh",
        paddingTop: "50px",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Left Section */}
          <div className="col-lg-6">
            <div
              className="card p-4 shadow-lg h-100"
              style={cardStyles} // Apply common card styles
            >
              {/* Desktop View */}
              <div className="d-none d-lg-block">
                {valueItems.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between mb-3"
                  >
                    <h4 style={{ color: styles.headingTextColor }}>
                      {item.label}
                    </h4>
                    <p style={{ color: styles.incomeValueTextColor }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile View */}
              <div className="d-lg-none">
                {valueItems.map((item, index) => (
                  <div
                    key={index}
                    className="card mb-3"
                    style={cardStyles} // Apply common card styles
                  >
                    <div className="card-body">
                      <h5 style={{ color: styles.headingTextColor }}>
                        {item.label}
                      </h5>
                      <p style={{ color: styles.incomeValueTextColor }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <small
                style={{ color: styles.withdrawalTextColor, marginTop: "30px" }}
              >
                {withdrawalText}
              </small>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6">
            <div
              className="card p-4 shadow-lg h-100"
              style={cardStyles} // Apply common card styles
            >
              <h3 style={{ color: styles.headingTextColor }}>Make Deposit</h3>
              <div className="input-group mb-3">
                <input
                  id="depositAmount"
                  type="number"
                  className="form-control"
                  placeholder="Enter BNB"
                  style={{
                    backgroundColor: styles.inputBgColor,
                    color: styles.incomeValueTextColor,
                    border: "none",
                  }}
                  value={depositAmount}
                  onChange={handleDepositChange}
                  min={minDeposit}
                  max={maxDeposit}
                  step="0.01"
                />
              </div>
              <p style={{ color: styles.smallTextColor }}>
                Minimum {minDeposit} BNB | Maximum {maxDeposit} BNB
              </p>
              <button
                id="sendTransaction"
                className="btn btn-lg"
                style={{
                  backgroundColor: styles.buttonColor,
                  color: styles.buttonTextColor,
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
