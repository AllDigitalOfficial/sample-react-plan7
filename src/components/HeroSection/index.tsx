import { Container } from "react-bootstrap";

const HeroSection = () => {
  // Get environment variable values
  const heroBgColor = import.meta.env.VITE_APP_HERO_BG_COLOR;
  const heroTextColor = import.meta.env.VITE_APP_HERO_TEXT_COLOR;
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR ;
  const buttonOutlineColor = import.meta.env.VITE_APP_BUTTON_OUTLINE_COLOR; 
  const presentationLink = import.meta.env.VITE_APP_PRESENTATION_LINK;
  const depositLink = import.meta.env.VITE_APP_DEPOSIT_LINK;

  // Sample balance data
  const contractBalance = "0.060 BNB";
  const totalWithdrawn = "0.408 BNB";

  return (
    <Container style={{ backgroundColor: heroBgColor, color: heroTextColor }}>
      <Container>
        <div className="row align-items-stretch g-4">
          {/* Left Section: Profit Info */}
          <div className="col-lg-6 col-md-6 d-flex">
            <div className="w-100 p-4 bg-black shadow rounded border d-flex flex-column">
              <h2 className="fw-bold mb-4" style={{ color: "#ffffff" }}>
                Fuel your crypto ambitions
                <br />
                with BNB.
              </h2>
              <div>
                <p className="mb-3" style={{ color: "#ffffff" }}>
                  <strong>Basic interest rate:</strong>{" "}
                  <span className="text-primary">4% every 24 hrs</span>
                </p>
                <p className="mb-3" style={{ color: "#ffffff" }}>
                  <strong>Personal hold-bonus:</strong>{" "}
                  <span className="text-primary">
                    +0.1% for every 24 hrs without withdrawal
                  </span>
                </p>
                <p className="mb-3" style={{ color: "#ffffff" }}>
                  <strong>Contract total amount bonus:</strong>{" "}
                  <span className="text-primary">
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
                backgroundColor: "#212529",
                borderRadius: "15px",
                padding: "20px",
                color: "#ffffff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                maxWidth: "400px",
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
