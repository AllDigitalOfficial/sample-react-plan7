const Referral = () => {
  // Get environment variable values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_BG_COLOR || "#f8f9fa"; // Default background color
  const textColor = import.meta.env.VITE_APP_REFERRAL_TEXT_COLOR || "#000000"; // Default text color
  const cardBgColor = "#000000"; // Set the card background color to black
  const cardTextColor =
    import.meta.env.VITE_APP_REFERRAL_CARD_TEXT_COLOR || "#ffffff"; // Default card text color (set to white for contrast)
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff"; // Default button color
  const buttonHoverColor =
    import.meta.env.VITE_APP_BUTTON_HOVER_COLOR || "#0056b3"; // Default button hover color

  return (
    <div className="roadmap-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="referral">
          {/* Referral Program Heading */}
          <h2 className="mb-4" style={{ color: textColor, textAlign: 'center' }}>
            Referral Program
          </h2>

          {/* Referral Link Section */}
          <div className="d-flex align-items-center justify-content-center mb-4">
            <span
              id="referralLink"
              className="fs-5 text-muted"
              style={{ color: textColor }}
            >
              You will get your referral link after investing...
            </span>
            <button
              id="copyButton"
              className="btn btn-outline-primary ms-3"
              style={{
                borderColor: buttonColor,
                color: buttonColor,
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  buttonHoverColor;
                (e.target as HTMLButtonElement).style.color = "#fff";
              }}
              onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "transparent";
                (e.target as HTMLButtonElement).style.color = buttonColor;
              }}
            >
              Copy Link
            </button>
          </div>

          {/* Referral Stats Section */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <div
                className="card shadow-sm p-3"
                style={{ backgroundColor: cardBgColor, color: cardTextColor }}
              >
                <h3>Total Reward</h3>
                <p id="usertotalreferralbonus" className="fs-4 fw-bold">
                  0.000 BNB
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div
                className="card shadow-sm p-3"
                style={{ backgroundColor: cardBgColor, color: cardTextColor }}
              >
                <h3>Total Referral</h3>
                <p id="countdownline" className="fs-4 fw-bold">
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
