import { getCardDataReferralLink } from "../../utils/utils_Components"; // Adjust the path if needed

const ReferralLinkData = () => {
  // Environment Variables with fallback values
  const bgColor = import.meta.env.VITE_APP_REFERRAL_LINK_BG_COLOR || "#192337";
  const textColor =
    import.meta.env.VITE_APP_REFERRAL_LINK_TEXT_COLOR || "#ffffff";
  const buttonColor = import.meta.env.VITE_APP_BUTTON_COLOR || "#007bff";
  const buttonTextColor =
    import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "#ffffff";
  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR || "#1f2833";
  const cardBoxShadow =
    import.meta.env.VITE_APP_CARD_BOX_SHADOW ||
    "rgba(0, 0, 0, 0.3) 0px 4px 15px";
  const cardBorderColor =
    import.meta.env.VITE_APP_CARD_BORDER_COLOR || "#2D4C70";
  const referralAmountColor =
    import.meta.env.VITE_APP_REFERRAL_AMOUNT_COLOR || "#ffffff";
  const userDividendsColor =
    import.meta.env.VITE_APP_USER_DIVIDENDS_COLOR || "#ffffff";
  const withdrawableBalanceColor =
    import.meta.env.VITE_APP_WITHDRAWABLE_BALANCE_COLOR || "#ffffff";

  // Dynamic Values from Env
  const referralAmount = import.meta.env.VITE_APP_REFERRAL_AMOUNT || "1.5";
  const userDividends = import.meta.env.VITE_APP_USER_DIVIDENDS || "0.8";
  const withdrawableBalance =
    import.meta.env.VITE_APP_WITHDRAWABLE_BALANCE || "2.0";
  const userDeposit = import.meta.env.VITE_APP_USER_DEPOSIT || "5.0";
  const userReturns = import.meta.env.VITE_APP_USER_RETURNS || "1.2";
  const totalWithdrawn = import.meta.env.VITE_APP_TOTAL_WITHDRAWNN || "1.000";
  const percentRate = import.meta.env.VITE_APP_PERCENT_RATE || "12%";

  // Creating data object for the utility function
  const referralLinkData = {
    userDeposit,
    userReturns,
    totalWithdrawn,
    percentRate,
  };

  // Get the data for the four specific cards using the utility function
  const cardData = getCardDataReferralLink(referralLinkData);

  return (
    <div className="expart-team-area py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row">
          {/* First Section: Three Boxes */}
          <div className="col-lg-12 mb-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div
                  className="card shadow-lg p-4 d-flex flex-column"
                  style={{
                    backgroundColor: cardBgColor,
                    color: textColor,
                    borderRadius: "15px",
                    boxShadow: cardBoxShadow,
                  }}
                >
                  <h3>Referral Amount Available</h3>
                  <p
                    className="fs-4 fw-bold"
                    style={{ color: referralAmountColor }}
                  >
                    {referralAmount}{" "}
                    <span style={{ color: textColor }}>BNB</span>
                  </p>
                </div>
              </div>

              <div className="col">
                <div
                  className="card shadow-lg p-4 d-flex flex-column"
                  style={{
                    backgroundColor: cardBgColor,
                    color: textColor,
                    borderRadius: "15px",
                    boxShadow: cardBoxShadow,
                  }}
                >
                  <h3>User Dividends Available</h3>
                  <p
                    className="fs-4 fw-bold"
                    style={{ color: userDividendsColor }}
                  >
                    {userDividends}{" "}
                    <span style={{ color: textColor }}>BNB</span>
                  </p>
                </div>
              </div>

              <div className="col">
                <div
                  className="card shadow-lg p-4 d-flex flex-column"
                  style={{
                    backgroundColor: cardBgColor,
                    color: textColor,
                    borderRadius: "15px",
                    boxShadow: cardBoxShadow,
                  }}
                >
                  <h3>Total Withdrawable Balance</h3>
                  <p
                    className="fs-4 fw-bold"
                    style={{ color: withdrawableBalanceColor }}
                  >
                    {withdrawableBalance}{" "}
                    <span style={{ color: textColor }}>BNB</span>
                  </p>
                  <button
                    className="btn mt-auto"
                    style={{
                      backgroundColor: buttonColor,
                      color: buttonTextColor,
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
              {cardData.map((card) => (
                <div key={card.id} className="col">
                  <div
                    className="card shadow-lg p-4"
                    style={{
                      backgroundColor: cardBgColor,
                      color: textColor,
                      borderRadius: "12px",
                      border: `1px solid ${cardBorderColor}`,
                    }}
                  >
                    <h4 style={{ color: card.color }}>{card.title}</h4>
                    <p className="fs-4 fw-bold" style={{ color: card.color }}>
                      {card.value} <span style={{ color: textColor }}>BNB</span>
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
