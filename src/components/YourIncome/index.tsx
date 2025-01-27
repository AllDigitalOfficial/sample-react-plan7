const ReferralLinkData = () => {
  // Get environment variable values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_LINK_BG_COLOR || "#f8f9fa"; // Default background color
  const textColor = import.meta.env.VITE_APP_REFERRAL_LINK_TEXT_COLOR || "#000000"; // Default text color
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff"; // Default button color
  const totalDepositColor = import.meta.env.VITE_APP_TOTAL_DEPOSIT_COLOR || "#28a745"; // Default color for Total Deposit card
  const totalWithdrawnColor = import.meta.env.VITE_APP_TOTAL_WITHDRAWN_COLOR || "#dc3545"; // Default color for Total Withdrawn card
  const returnsColor = import.meta.env.VITE_APP_RETURNS_COLOR || "#ffc107"; // Default color for Returns card
  const interestRateColor = import.meta.env.VITE_APP_INTEREST_RATE_COLOR || "#17a2b8"; // Default color for Interest Rate card
  const rateColor = import.meta.env.VITE_APP_RATE_COLOR || "#007bff"; // Default color for rate text

  return (
    <div className="expart-team-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row">
          {/* Left Side: One Large Card */}
          <div className="col-lg-12 mb-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* Box 1: Referral Amount Available */}
              <div className="col">
                <div
                  className="card shadow-lg p-4 d-flex flex-column"
                  style={{ backgroundColor: "#000000", color: "#ffffff", borderRadius: "12px" }}
                >
                  <div className="referral-section mb-4 flex-grow-1">
                    <h3 className="title" style={{ color: "#ffffff" }}>Referral Amount Available</h3>
                    <div className="referral-info">
                      <p
                        id="userAvailabereferralbonus"
                        className="fs-4 fw-bold"
                        style={{ color: "#ffc107" }} // A golden yellow for the amount, for visibility
                      >
                        0.000 <span className="text-white">BNB</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2: User Dividends Available */}
              <div className="col">
                <div
                  className="card shadow-lg p-4 d-flex flex-column"
                  style={{ backgroundColor: "#000000", color: "#ffffff", borderRadius: "12px" }}
                >
                  <div className="dividends-section mb-4 flex-grow-1">
                    <h3 className="title" style={{ color: "#ffffff" }}>User Dividends Available</h3>
                    <div className="dividends-info">
                      <p
                        id="userDivident"
                        className="fs-4 fw-bold"
                        style={{ color: "#17a2b8" }} // Light blue for visibility
                      >
                        0.000 <span className="text-white">BNB</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3: Total Withdrawable Balance */}
              <div className="col">
                <div
                  className="card shadow-lg p-4 d-flex flex-column"
                  style={{ backgroundColor: "#000000", color: "#ffffff", borderRadius: "12px" }}
                >
                  <div className="withdrawable-section mb-4 flex-grow-1">
                    <h3 className="title" style={{ color: "#ffffff" }}>Total Withdrawable Balance</h3>
                    <div className="withdrawable-info">
                      <p
                        id="totalWithdrawableBalance"
                        className="fs-4 fw-bold"
                        style={{ color: "#28a745" }} // Green for visibility
                      >
                        0.000 <span className="text-white">BNB</span>
                      </p>
                      <button
                        id="withdraw-button"
                        className="btn mt-auto"
                        style={{
                          backgroundColor: buttonColor, // Blue button color
                          color: "#fff",
                          borderRadius: "6px",
                          padding: "10px 20px",
                          fontWeight: "bold",
                          border: "none",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        Withdrawal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Four State Cards */}
          <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {/* Box 1: User Deposit */}
              <div className="col">
                <div
                  className="card shadow-lg p-4"
                  style={{
                    backgroundColor: "#000000", // Set background to black
                    color: "#ffffff", // Text color white
                    borderColor: totalDepositColor,
                    borderRadius: "12px",
                  }}
                >
                  <h4 className="title" style={{ color: totalDepositColor }}>
                    User Deposit
                  </h4>
                  <div className="profit-info">
                    <h4
                      id="userDeposits"
                      className="rate fs-4 fw-bold"
                      style={{ color: totalDepositColor }}
                    >
                      0.000 <span className="text-white">BNB</span>
                    </h4>
                  </div>
                </div>
              </div>

              {/* Box 2: User Returns */}
              <div className="col">
                <div
                  className="card shadow-lg p-4"
                  style={{
                    backgroundColor: "#000000", // Set background to black
                    color: "#ffffff", // Text color white
                    borderColor: returnsColor,
                    borderRadius: "12px",
                  }}
                >
                  <h4 className="title" style={{ color: returnsColor }}>
                    User Returns
                  </h4>
                  <div className="profit-info">
                    <h4
                      id="profit"
                      className="rate fs-4 fw-bold"
                      style={{ color: returnsColor }}
                    >
                      0.000 <span className="text-white">BNB</span>
                    </h4>
                  </div>
                </div>
              </div>

              {/* Box 3: User Total Withdrawals */}
              <div className="col">
                <div
                  className="card shadow-lg p-4"
                  style={{
                    backgroundColor: "#000000", // Set background to black
                    color: "#ffffff", // Text color white
                    borderColor: totalWithdrawnColor,
                    borderRadius: "12px",
                  }}
                >
                  <h4 className="title" style={{ color: totalWithdrawnColor }}>
                    User Total Withdrawn
                  </h4>
                  <div className="profit-info">
                    <h4
                      id="totalUserTotalWithdrawn"
                      className="rate fs-4 fw-bold"
                      style={{ color: totalWithdrawnColor }}
                    >
                      0.000 <span className="text-white">BNB</span>
                    </h4>
                  </div>
                </div>
              </div>

              {/* Box 4: Percent Rate */}
              <div className="col">
                <div
                  className="card shadow-lg p-4"
                  style={{
                    backgroundColor: "#000000", // Set background to black
                    color: "#ffffff", // Text color white
                    borderColor: interestRateColor,
                    borderRadius: "12px",
                  }}
                >
                  <h4 className="title" style={{ color: interestRateColor }}>
                    Percent Rate
                  </h4>
                  <div className="profit-info">
                    <h4
                      id="interestRate"
                      className="rate fs-4 fw-bold"
                      style={{ color: interestRateColor }}
                    >
                      0.000 <span className="text-white">BNB</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralLinkData;
