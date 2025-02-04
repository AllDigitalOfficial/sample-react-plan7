import React from "react";
import { Container } from "react-bootstrap";

const HeroSection: React.FC = () => {
  // Retrieve values from environment variables
  const heroBgColor = import.meta.env.VITE_APP_HERO_BG_COLOR || "#292d36";
  const heroTextColor =
    import.meta.env.VITE_APP_HERO_TEXT_COLOR || "rgb(255, 255, 255)";
  const buttonColor = import.meta.env.VITE_APP_HERO_BUTTON_COLOR || "#007bff";
  const buttonOutlineColor =
    import.meta.env.VITE_APP_HERO_BUTTON_OUTLINE_COLOR || "#007bff";
  const presentationLink =
    import.meta.env.VITE_APP_HERO_PRESENTATION_LINK || "BnbOath PPT.pdf";
  const smartContractLink =
    import.meta.env.VITE_APP_HERO_SMART_CONTRACT || "#smart-contract";
  const rightSectionBgColor =
    import.meta.env.VITE_APP_HERO_RIGHT_SECTION_BG_COLOR || "#212529";
  const titleColor = import.meta.env.VITE_APP_HERO_TITLE_COLOR || "#ffd700";
  const balanceColor = import.meta.env.VITE_APP_HERO_BALANCE_COLOR || "#28a745";
  const profitTextColor =
    import.meta.env.VITE_APP_HERO_PROFIT_TEXT_COLOR || "#ffffff";
  const profitSectionBgColor =
    import.meta.env.VITE_APP_HERO_PROFIT_SECTION_BG_COLOR || "#292d36";

  // Hero section text and heading color
  const heroHeading =
    import.meta.env.VITE_APP_HERO_HEADING ||
    "Fuel your crypto ambitions with BNB.";
  const heroHeadingColor =
    import.meta.env.VITE_APP_HERO_HEADING_COLOR || "rgb(255, 253, 243)"; // Gold color

  // Profit section values and their colors
  const basicInterestRate =
    import.meta.env.VITE_APP_HERO_BASIC_INTEREST_RATE || "4% every 24 hrs";
  const holdBonus =
    import.meta.env.VITE_APP_HERO_HOLD_BONUS ||
    "+0.1% for every 24 hrs without withdrawal";
  const contractAmountBonus =
    import.meta.env.VITE_APP_HERO_CONTRACT_AMOUNT_BONUS ||
    "+0.1% for every 500 BNB on platform address balance";

  const basicInterestRateColor =
    import.meta.env.VITE_APP_HERO_BASIC_INTEREST_RATE_COLOR ||
    "rgb(255, 255, 255)";
  const holdBonusColor =
    import.meta.env.VITE_APP_HERO_HOLD_BONUS_COLOR || "rgb(255, 255, 255)";
  const contractAmountBonusColor =
    import.meta.env.VITE_APP_HERO_CONTRACT_AMOUNT_BONUS_COLOR ||
    "rgb(255, 255, 255)";

  const contractBalance =
    import.meta.env.VITE_APP_HERO_CONTRACT_BALANCE || "0.000 BNB";

  // Define common styles for buttons and sections
  const buttonStyles = {
    default: {
      backgroundColor: buttonColor,
      color: heroTextColor, // Use heroTextColor here instead of hardcoding
      border: "none",
    },
    outline: {
      color: buttonOutlineColor,
      border: `2px solid ${buttonOutlineColor}`,
      background: "transparent",
    },
  };

  const sectionStyles = {
    leftSection: {
      backgroundColor: profitSectionBgColor,
      color: profitTextColor,
      border: "none",
      boxShadow: "none",
    },
    rightSection: {
      backgroundColor: rightSectionBgColor,
      borderRadius: "15px",
      padding: "20px",
      color: heroTextColor,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      maxWidth: "500px",
      width: "100%",
    },
    heroContainer: {
      backgroundColor: heroBgColor,
      color: heroTextColor,
      position: "relative" as "relative", // Explicitly type-casting as valid CSS position
      paddingTop: "100px", // To prevent navbar overlap on mobile
    },
    heroHeading: {
      color: heroHeadingColor,
      marginTop: "-20px",
      fontSize: "2.5rem", // Adjust size as needed
    },
  };

  return (
    <Container fluid style={sectionStyles.heroContainer}>
      <div
        className="row align-items-center g-4"
        style={{ minHeight: "600px" }}
      >
        {/* Left Section: Profit Info */}
        <div className="col-lg-6 col-md-6 d-flex">
          <div
            className="w-100 p-4 rounded d-flex flex-column"
            style={sectionStyles.leftSection}
          >
            <h2 className="fw-bold mb-4" style={sectionStyles.heroHeading}>
              {heroHeading}
            </h2>
            <div>
              <p className="mb-0">
                <strong style={{ color: basicInterestRateColor }}>
                  Basic interest rate:
                </strong>{" "}
                <span
                  style={{ fontWeight: "700", color: basicInterestRateColor }}
                >
                  {basicInterestRate}
                </span>
              </p>
              <p className="mb-0">
                <strong style={{ color: holdBonusColor }}>
                  Personal hold-bonus:
                </strong>{" "}
                <span style={{ fontWeight: "700", color: holdBonusColor }}>
                  {holdBonus}
                </span>
              </p>
              <p className="mb-0">
                <strong style={{ color: contractAmountBonusColor }}>
                  Contract total amount bonus:
                </strong>{" "}
                <span
                  style={{ fontWeight: "700", color: contractAmountBonusColor }}
                >
                  {contractAmountBonus}
                </span>
              </p>
            </div>
            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-start">
              {[
                {
                  href: presentationLink,
                  style: buttonStyles.default,
                  text: "Presentation",
                },
                {
                  href: smartContractLink,
                  style: buttonStyles.outline,
                  text: "Smart Contract",
                },
              ].map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn hero-button"
                  style={button.style}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Contract Balance */}
        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
          <div style={sectionStyles.rightSection}>
            <h3
              style={{
                color: titleColor,
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              Current Contract Balance
            </h3>

            <div style={{ marginBottom: "20px", textAlign: "center" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: balanceColor,
                }}
              >
                {contractBalance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
