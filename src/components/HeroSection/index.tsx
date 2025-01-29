import { Container } from "react-bootstrap";

const HeroSection = () => {
  // Get environment variable values
  const heroBgColor = import.meta.env.VITE_APP_HERO_BG_COLOR;
  const heroTextColor = import.meta.env.VITE_APP_HERO_TEXT_COLOR;
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR;
  const buttonOutlineColor = import.meta.env.VITE_APP_BUTTON_OUTLINE_COLOR;
  const presentationLink = import.meta.env.VITE_APP_PRESENTATION_LINK;
  const depositLink = import.meta.env.VITE_APP_DEPOSIT_LINK;

  // Sample balance data
  const contractBalance = "0.000 BNB";
  const totalWithdrawn = "0.000 BNB";

  return (
    <Container style={{ backgroundColor: heroBgColor, color: heroTextColor }}>
      <Container>
        <div className="row align-items-center g-4" style={{ minHeight: "600px" }}>
          {/* Left Section: Profit Info */}
          <div className="col-lg-6 col-md-6 d-flex">
            <div
              className="w-100 p-4 rounded d-flex flex-column"
              style={{
                backgroundColor: "#292d36", // Updated background color
                color: "#ffffff", // Text color set to white
                border: "none", // Remove border
                boxShadow: "none", // Remove shadow
              }}
            >
              <h2
                className="fw-bold mb-4"
                style={{
                  color: "#ffffff",
                  marginTop: "-20px", // Move text up
                  fontSize: "2.5rem", // Increase text size
                }}
              >
                Fuel your crypto ambitions
                <br />
                with BNB.
              </h2>
              <div>
                <p
                  className="mb-0" // Remove bottom margin
                  style={{ color: "#ffffff", marginBottom: "0" }}
                >
                  <strong>Basic interest rate:</strong>{" "}
                  <span
                    style={{
                      color: "#ffffff", // White text for the percentage
                      fontWeight: "700", // Extra bold text
                    }}
                  >
                    4% every 24 hrs
                  </span>
                </p>
                <p
                  className="mb-0" // Remove bottom margin
                  style={{ color: "#ffffff", marginBottom: "0" }}
                >
                  <strong>Personal hold-bonus:</strong>{" "}
                  <span
                    style={{
                      color: "#ffffff", // White text for the percentage
                      fontWeight: "700", // Extra bold text
                    }}
                  >
                    +0.1% for every 24 hrs without withdrawal
                  </span>
                </p>
                <p
                  className="mb-0" // Remove bottom margin
                  style={{ color: "#ffffff", marginBottom: "0" }}
                >
                  <strong>Contract total amount bonus:</strong>{" "}
                  <span
                    style={{
                      color: "#ffffff", // White text for the percentage
                      fontWeight: "700", // Extra bold text
                    }}
                  >
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
                    border: "none", // No border on the button
                  }}
                >
                  Presentation
                </a>
                <a
                  href={depositLink}
                  className="btn"
                  style={{
                    color: buttonOutlineColor,
                    border: `2px solid ${buttonOutlineColor}`, // Border for the outline button
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
                backgroundColor: "#212529",
                borderRadius: "15px",
                padding: "20px",
                color: "#ffffff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                maxWidth: "500px", // Increased width of the boxes
                width: "100%", // Ensure the box uses full available width
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
              <div style={{ marginBottom: "20px" }}>
                <p style={{ margin: 0, fontSize: "1rem" }}>Contract Balance</p>
                <p style={{ margin: 0, fontSize: "1.5rem", color: "#28a745" }}>
                  {contractBalance}
                </p>
              </div>

              {/* Total Withdrawns */}
              <div
                style={{
                  backgroundColor: "#343a40",
                  padding: "10px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0, fontSize: "1rem" }}>Total Withdrawns</p>
                <p style={{ margin: 0, fontSize: "1.2rem", color: "#dc3545" }}>
                  {totalWithdrawn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default HeroSection;
