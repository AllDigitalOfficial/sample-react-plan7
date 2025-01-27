import { Container } from "react-bootstrap";

const HeroSection = () => {
  // Get environment variable values
  const heroBgColor = import.meta.env.VITE_APP_HERO_BG_COLOR || "#121212"; // Set default black background
  const heroTextColor = import.meta.env.VITE_APP_HERO_TEXT_COLOR || "#ffffff"; // White text for contrast
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff"; // Default button color
  const buttonOutlineColor =
    import.meta.env.VITE_APP_BUTTON_OUTLINE_COLOR || "#007bff"; // Default outline button color
  const presentationLink =
    import.meta.env.VITE_APP_PRESENTATION_LINK || "P3 BNBCLUB PPTV.pdf"; // Default presentation link
  const depositLink = import.meta.env.VITE_APP_DEPOSIT_LINK || "#deposit"; // Default deposit link

  // Sample balance data (replace with dynamic data as needed)
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
                    padding: "10px 20px", // Reduced padding for smaller buttons
                    borderRadius: "30px", // Rounded corners
                    fontWeight: "600", // Bold font
                    fontSize: "1rem", // Reduced font size for better fit
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow for depth
                    transition: "all 0.3s ease", // Smooth transition for hover
                  }}
                >
                  Presentation
                </a>
                <a
                  href={depositLink}
                  className="btn"
                  style={{
                    borderColor: buttonOutlineColor,
                    color: buttonOutlineColor,
                    borderWidth: "2px",
                    padding: "10px 20px", // Reduced padding for smaller buttons
                    borderRadius: "30px", // Rounded corners
                    fontWeight: "600", // Bold font
                    fontSize: "1rem", // Reduced font size for better fit
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow for depth
                    transition: "all 0.3s ease", // Smooth transition for hover
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
                backgroundColor: "#212529", // Dark background
                borderRadius: "15px", // Rounded corners
                padding: "20px",
                color: "#ffffff", // Text color
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Subtle shadow
                maxWidth: "400px",
                width: "100%", // Make sure it takes full width in container
              }}
            >
              {/* Title */}
              <h3
                style={{
                  color: "#ffd700", // Golden color
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
                  backgroundColor: "#343a40", // Slightly lighter than the main background
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
