const ReferralLinkData = () => {
  // Get environment variable values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_LINK_BG_COLOR 
  const textColor = import.meta.env.VITE_APP_REFERRAL_LINK_TEXT_COLOR 
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR 
  const totalDepositColor = import.meta.env.VITE_APP_TOTAL_DEPOSIT_COLOR 
  const totalWithdrawnColor = import.meta.env.VITE_APP_TOTAL_WITHDRAWN_COLOR 
  const returnsColor = import.meta.env.VITE_APP_RETURNS_COLOR
  const interestRateColor = import.meta.env.VITE_APP_INTEREST_RATE_COLOR 

  return (
    <div className="expart-team-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row">
          {/* First Section: Three Boxes */}
          <div className="col-lg-12 mb-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* Box 1 */}
              <div className="col">
                <div
                  className="card shadow-lg p-4 d-flex flex-column"
                  style={{
                    backgroundColor: "rgb(30, 30, 45)",
                    color: "#ffffff",
                    borderRadius: "15px",
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 15px",
                  }}
                >
                  <h3 style={{ color: "#ffffff" }}>Referral Amount Available</h3>
                  <p className="fs-4 fw-bold" style={{ color: "#ffc107" }}>
                    0.000 <span className="text-white">BNB</span>
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="col">
                <div
                  className="card shadow-lg p-4 d-flex flex-column"
                  style={{
                    backgroundColor: "rgb(30, 30, 45)",
                    color: "#ffffff",
                    borderRadius: "15px",
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 15px",
                  }}
                >
                  <h3 style={{ color: "#ffffff" }}>User Dividends Available</h3>
                  <p className="fs-4 fw-bold" style={{ color: "#17a2b8" }}>
                    0.000 <span className="text-white">BNB</span>
                  </p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="col">
                <div
                  className="card shadow-lg p-4 d-flex flex-column"
                  style={{
                    backgroundColor: "rgb(30, 30, 45)",
                    color: "#ffffff",
                    borderRadius: "15px",
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 15px",
                  }}
                >
                  <h3 style={{ color: "#ffffff" }}>Total Withdrawable Balance</h3>
                  <p className="fs-4 fw-bold" style={{ color: "#28a745" }}>
                    0.000 <span className="text-white">BNB</span>
                  </p>
                  <button
                    className="btn mt-auto"
                    style={{
                      backgroundColor: buttonColor,
                      color: "#fff",
                      borderRadius: "6px",
                      padding: "12px 24px",
                      fontWeight: "bold",
                      border: "none",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Withdrawal
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section: Four Boxes */}
          <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {/* Box 1 */}
              <div className="col">
                <div
                  className="card shadow-lg p-4"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#000000",
                    borderRadius: "12px",
                    border: `2px solid ${totalDepositColor}`,
                  }}
                >
                  <h4 style={{ color: totalDepositColor }}>User Deposit</h4>
                  <p className="fs-4 fw-bold" style={{ color: totalDepositColor }}>
                    0.000 <span>BNB</span>
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="col">
                <div
                  className="card shadow-lg p-4"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#000000",
                    borderRadius: "12px",
                    border: `2px solid ${returnsColor}`,
                  }}
                >
                  <h4 style={{ color: returnsColor }}>User Returns</h4>
                  <p className="fs-4 fw-bold" style={{ color: returnsColor }}>
                    0.000 <span>BNB</span>
                  </p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="col">
                <div
                  className="card shadow-lg p-4"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#000000",
                    borderRadius: "12px",
                    border: `2px solid ${totalWithdrawnColor}`,
                  }}
                >
                  <h4 style={{ color: totalWithdrawnColor }}>User Total Withdrawn</h4>
                  <p className="fs-4 fw-bold" style={{ color: totalWithdrawnColor }}>
                    0.000 <span>BNB</span>
                  </p>
                </div>
              </div>

              {/* Box 4 */}
              <div className="col">
                <div
                  className="card shadow-lg p-4"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#000000",
                    borderRadius: "12px",
                    border: `2px solid ${interestRateColor}`,
                  }}
                >
                  <h4 style={{ color: interestRateColor }}>Percent Rate</h4>
                  <p className="fs-4 fw-bold" style={{ color: interestRateColor }}>
                    0.000 <span>BNB</span>
                  </p>
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
