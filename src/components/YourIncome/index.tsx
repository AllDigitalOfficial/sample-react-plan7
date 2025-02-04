import { getCardDataReferralLink } from "../../utils/utils_Components"; // Adjust the path if needed

const ReferralLinkData = () => {
  // Environment Variables with fallback values
  const colors = {
    bgColor:
      import.meta.env.VITE_APP_REFERRAL_LINK_BG_COLOR_INCOME || "#192337",
    textColor:
      import.meta.env.VITE_APP_REFERRAL_LINK_TEXT_COLOR_INCOME || "#ffffff",
    buttonColor: import.meta.env.VITE_APP_BUTTON_COLOR_INCOME || "#007bff",
    buttonTextColor:
      import.meta.env.VITE_APP_BUTTON_TEXT_COLOR_INCOME || "#ffffff",
    cardBgColor: import.meta.env.VITE_APP_CARD_BG_COLOR_INCOME || "#1f2833",
    cardBoxShadow:
      import.meta.env.VITE_APP_CARD_BOX_SHADOW_INCOME ||
      "rgba(0, 0, 0, 0.3) 0px 4px 15px",
    cardBorderColor:
      import.meta.env.VITE_APP_CARD_BORDER_COLOR_INCOME || "#2D4C70",
    referralAmountColor:
      import.meta.env.VITE_APP_REFERRAL_AMOUNT_COLOR_INCOME || "#ffffff",
    userDividendsColor:
      import.meta.env.VITE_APP_USER_DIVIDENDS_COLOR_INCOME || "#ffffff",
    withdrawableBalanceColor:
      import.meta.env.VITE_APP_WITHDRAWABLE_BALANCE_COLOR_INCOME || "#ffffff",
  };

  // Dynamic Values from Env
  const amounts = {
    referralAmount: import.meta.env.VITE_APP_REFERRAL_AMOUNT_INCOME || "1.5",
    userDividends: import.meta.env.VITE_APP_USER_DIVIDENDS_INCOME || "0.8",
    withdrawableBalance:
      import.meta.env.VITE_APP_WITHDRAWABLE_BALANCE_INCOME || "2.0",
    userDeposit: import.meta.env.VITE_APP_USER_DEPOSIT_INCOME || "5.0",
    userReturns: import.meta.env.VITE_APP_USER_RETURNS_INCOME || "1.2",
    totalWithdrawn: import.meta.env.VITE_APP_TOTAL_WITHDRAWNN_INCOME || "1.000",
    percentRate: import.meta.env.VITE_APP_PERCENT_RATE_INCOME || "12%",
  };

  // Creating data object for the utility function
  const referralLinkData = {
    userDeposit: amounts.userDeposit,
    userReturns: amounts.userReturns,
    totalWithdrawn: amounts.totalWithdrawn,
    percentRate: amounts.percentRate,
  };

  // Get the data for the four specific cards using the utility function
  const cardData = getCardDataReferralLink(referralLinkData);

  // Arrays of objects to map over for dynamic rendering
  const boxes = [
    {
      title: "Referral Amount Available",
      value: amounts.referralAmount,
      color: colors.referralAmountColor,
    },
    {
      title: "User Dividends Available",
      value: amounts.userDividends,
      color: colors.userDividendsColor,
    },
    {
      title: "Total Withdrawable Balance",
      value: amounts.withdrawableBalance,
      color: colors.withdrawableBalanceColor,
      button: true,
    },
  ];

  // Common styles for the cards
  const baseCardStyle = {
    backgroundColor: colors.cardBgColor,
    color: colors.textColor,
    borderRadius: "12px",
    border: `1px solid ${colors.cardBorderColor}`,
  };

  const baseButtonStyle = {
    backgroundColor: colors.buttonColor,
    color: colors.buttonTextColor,
  };

  const baseCardShadowStyle = {
    backgroundColor: colors.cardBgColor,
    color: colors.textColor,
    borderRadius: "15px",
    boxShadow: colors.cardBoxShadow,
  };

  return (
    <div
      className="expart-team-area py-5"
      style={{ backgroundColor: colors.bgColor }}
    >
      <div className="container">
        <div className="row">
          {/* First Section: Three Boxes */}
          <div className="col-lg-12 mb-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {boxes.map((box, index) => (
                <div key={index} className="col">
                  <div
                    className="card shadow-lg p-4 d-flex flex-column"
                    style={baseCardShadowStyle} // Using the shared base card style
                  >
                    <h3>{box.title}</h3>
                    <p className="fs-4 fw-bold" style={{ color: box.color }}>
                      {box.value}{" "}
                      <span style={{ color: colors.textColor }}>BNB</span>
                    </p>
                    {box.button && (
                      <button
                        className="btn mt-auto"
                        style={baseButtonStyle} // Using the shared button style
                      >
                        Withdrawal
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Section: Four Boxes */}
          <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {cardData.map((card) => (
                <div key={card.id} className="col">
                  <div
                    className="card shadow-lg p-4"
                    style={baseCardStyle} // Using the shared base card style
                  >
                    <h4 style={{ color: card.color }}>{card.title}</h4>
                    <p className="fs-4 fw-bold" style={{ color: card.color }}>
                      {card.value}{" "}
                      <span style={{ color: colors.textColor }}>BNB</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralLinkData;
