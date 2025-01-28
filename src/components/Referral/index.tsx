import type React from "react"

const Referral: React.FC = () => {
  // Get environment variable values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_BG_COLOR 
  const textColor = import.meta.env.VITE_APP_REFERRAL_TEXT_COLOR 
  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR 
  const cardTextColor = import.meta.env.VITE_APP_CARD_TEXT_COLOR 
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR 
  const buttonHoverColor = import.meta.env.VITE_APP_BUTTON_HOVER_COLOR 

  return (
    <div className="roadmap-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="referral">
          {/* Referral Program Heading */}
          <h2 className="mb-4" style={{ color: textColor, textAlign: "center" }}>
            Referral Program
          </h2>

          {/* Referral Link Section */}
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
            <div
              className="referral-message p-3 rounded mb-3 mb-md-0 me-md-3"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: textColor,
                fontWeight: "bold",
                fontSize: "18px",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                maxWidth: "100%",
                wordBreak: "break-word",
              }}
            >
              You will get your referral link after investing...
            </div>
            <button
              id="copyButton"
              className="btn btn-outline-primary"
              style={{
                borderColor: buttonColor,
                color: buttonColor,
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseOver={(e) => {
                ;(e.target as HTMLButtonElement).style.backgroundColor = buttonHoverColor
                ;(e.target as HTMLButtonElement).style.color = "#fff"
              }}
              onMouseOut={(e) => {
                ;(e.target as HTMLButtonElement).style.backgroundColor = "transparent"
                ;(e.target as HTMLButtonElement).style.color = buttonColor
              }}
            >
              Copy Link
            </button>
          </div>

          {/* Referral Stats Section */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card shadow-sm p-3" style={{ backgroundColor: cardBgColor, color: cardTextColor }}>
                <h3>Total Reward</h3>
                <p id="usertotalreferralbonus" className="fs-4 fw-bold">
                  0.000 BNB
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card shadow-sm p-3" style={{ backgroundColor: cardBgColor, color: cardTextColor }}>
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
  )
}

export default Referral
