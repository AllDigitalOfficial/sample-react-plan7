import type React from "react"
import { useState, useEffect } from "react"

const Referral: React.FC = () => {
  // Get environment variable values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_BG_COLOR
  const textColor = import.meta.env.VITE_APP_REFERRAL_TEXT_COLOR
  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR
  const cardTextColor = import.meta.env.VITE_APP_CARD_TEXT_COLOR
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR
  const buttonHoverColor = import.meta.env.VITE_APP_BUTTON_HOVER_COLOR

  // State for toast visibility
  const [showToast, setShowToast] = useState(false)

  // Function to handle link copying and show toast
  const handleCopyLink = () => {
    // Simulate copying the referral link (you can replace this with actual logic)
    const referralLink = "https://your-referral-link.com" // replace with dynamic link
    navigator.clipboard.writeText(referralLink).then(() => {
      setShowToast(true) // Show the toast after the link is copied
    })
  }

  // Effect to hide toast after 3 seconds
  useEffect(() => {
    let timer: number
    if (showToast) {
      timer = window.setTimeout(() => {
        setShowToast(false)
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [showToast])

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

            {/* Copy Link Button */}
            <div style={{ position: "relative" }}>
              <button
                id="copyButton"
                className="btn btn-outline-primary"
                style={{
                  borderColor: buttonColor,
                  color: buttonColor,
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
                onClick={handleCopyLink}
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

              {/* Toast message positioned above the button */}
              {showToast && (
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 9999,
                    backgroundColor: "rgb(149, 156, 156)",
                    color: "#ffffff",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    fontSize: "14px",
                  }}
                >
                  Referral link copied to clipboard!
                </div>
              )}
            </div>
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

