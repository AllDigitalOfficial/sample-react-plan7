import type React from "react"
import { useState, useEffect } from "react"
import { Container, Button } from "react-bootstrap"
import { ArrowUp } from "react-bootstrap-icons"

const HeroSection: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false)

  // Get environment variable values
  const heroBgColor = import.meta.env.VITE_APP_HERO_BG_COLOR
  const heroTextColor = import.meta.env.VITE_APP_HERO_TEXT_COLOR
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR
  const buttonOutlineColor = import.meta.env.VITE_APP_BUTTON_OUTLINE_COLOR
  const presentationLink = import.meta.env.VITE_APP_PRESENTATION_LINK
  const depositLink = import.meta.env.VITE_APP_DEPOSIT_LINK
  const arrowButtonColor = import.meta.env.VITE_APP_ARROW_BUTTON_COLOR
  const arrowButtonBgColor = import.meta.env.VITE_APP_ARROW_BUTTON_BG_COLOR
  const rightSectionBgColor = import.meta.env.VITE_APP_RIGHT_SECTION_BG_COLOR

  // Sample balance data
  const contractBalance = "0.000 BNB"
  const totalWithdrawn = "0.000 BNB"

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true)
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false)
      }
    }

    window.addEventListener("scroll", checkScrollTop)
    return () => window.removeEventListener("scroll", checkScrollTop)
  }, [showScroll])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Container fluid style={{ backgroundColor: heroBgColor, color: heroTextColor, position: "relative" }}>
      <div className="row align-items-center g-4" style={{ minHeight: "600px" }}>
        {/* Left Section: Profit Info */}
        <div className="col-lg-6 col-md-6 d-flex">
          <div
            className="w-100 p-4 rounded d-flex flex-column"
            style={{
              backgroundColor: "#292d36",
              color: "#ffffff",
              border: "none",
              boxShadow: "none",
            }}
          >
            <h2
              className="fw-bold mb-4"
              style={{
                color: "#ffffff",
                marginTop: "-20px",
                fontSize: "2.5rem",
              }}
            >
              Fuel your crypto ambitions
              <br />
              with BNB.
            </h2>
            <div>
              <p className="mb-0" style={{ color: "#ffffff" }}>
                <strong>Basic interest rate:</strong>{" "}
                <span style={{ color: "#ffffff", fontWeight: "700" }}>4% every 24 hrs</span>
              </p>
              <p className="mb-0" style={{ color: "#ffffff" }}>
                <strong>Personal hold-bonus:</strong>{" "}
                <span style={{ color: "#ffffff", fontWeight: "700" }}>+0.1% for every 24 hrs without withdrawal</span>
              </p>
              <p className="mb-0" style={{ color: "#ffffff" }}>
                <strong>Contract total amount bonus:</strong>{" "}
                <span style={{ color: "#ffffff", fontWeight: "700" }}>
                  +0.1% for every 500 BNB on platform address balance
                </span>
              </p>
            </div>
            <div className="d-flex gap-3 mt-4 justify-content-start">
              <a
                href={presentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  backgroundColor: buttonColor,
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  border: "none",
                }}
              >
                Presentation
              </a>
              <a
                href={depositLink}
                className="btn"
                style={{
                  color: buttonOutlineColor,
                  border: `2px solid ${buttonOutlineColor}`,
                  padding: "10px 20px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  background: "transparent",
                }}
              >
                Deposit
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Contract Balance and User Info */}
        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
          <div
            style={{
              backgroundColor: rightSectionBgColor,
              borderRadius: "15px",
              padding: "20px",
              color: "#ffffff",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              maxWidth: "500px",
              width: "100%",
            }}
          >
            {/* Title */}
            <h3
              style={{
                color: "#ffd700",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              Current Contract Balance
            </h3>

            {/* Contract Balance */}
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#28a745",
                }}
              >
                {contractBalance}
              </p>
            </div>

            {/* Total Withdrawns */}
            <div
              style={{
                backgroundColor: "#343a40",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.2rem", fontWeight: "700" }}>Total Withdrawn</p>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#dc3545",
                }}
              >
                {totalWithdrawn}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: showScroll ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: arrowButtonBgColor,
          border: "none",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
      >
        <ArrowUp size={24} color={arrowButtonColor} />
      </Button>
    </Container>
  )
}

export default HeroSection
