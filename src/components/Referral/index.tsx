import React, { useState, useEffect } from "react";

const Referral: React.FC = () => {
  const styles = {
    bgColor: import.meta.env.VITE_APP_REFERRAL_REFERRAL_BG_COLOR || "#111827",
    textColor:
      import.meta.env.VITE_APP_REFERRAL_REFERRAL_TEXT_COLOR || "#ffffff",
    cardBgColor:
      import.meta.env.VITE_APP_REFERRAL_Referral_CARD_BG_COLOR || "#192337",
    cardTextColor:
      import.meta.env.VITE_APP_REFERRAL_CARD_TEXT_COLOR || "#ffffff",
    buttonColor:
      import.meta.env.VITE_APP_REFERRAL_Referral_BUTTON_COLOR ||
      "rgb(255, 153, 0)",
    totalReward:
      import.meta.env.VITE_APP_REFERRAL_REFERRAL_TOTAL_REWARD || "0.000 BNB",
    totalCount: import.meta.env.VITE_APP_REFERRAL_REFERRAL_TOTAL_COUNT || 0,
    toastBgColor: import.meta.env.VITE_APP_REFERRAL_TOAST_BG_COLOR || "#959c9c",
    toastTextColor:
      import.meta.env.VITE_APP_REFERRAL_TOAST_TEXT_COLOR || "#ffffff",
    toastShadowColor:
      import.meta.env.VITE_APP_REFERRAL_TOAST_SHADOW_COLOR ||
      "rgba(0, 0, 0, 0.2)",
    messageBgColor:
      import.meta.env.VITE_APP_REFERRAL_MESSAGE_BG_COLOR ||
      "rgba(255, 255, 255, 0.1)",
    messageBorderColor:
      import.meta.env.VITE_APP_REFERRAL_MESSAGE_BORDER_COLOR ||
      "rgba(255, 255, 255, 0.2)",
  };

  const [showToast, setShowToast] = useState(false);

  const handleCopyLink = () => {
    const referralLink = "https://your-referral-link.com";
    navigator.clipboard.writeText(referralLink).then(() => {
      setShowToast(true);
    });
  };

  useEffect(() => {
    let timer: number;
    if (showToast) {
      timer = window.setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showToast]);

  const cards = [
    {
      title: "Total Reward",
      value: styles.totalReward,
      id: "userTotalReferralBonus",
    },
    { title: "Total Referral", value: styles.totalCount, id: "countdownline" },
  ];

  const buttonStyle: React.CSSProperties = {
    backgroundColor: styles.buttonColor,
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  };

  const messageStyle: React.CSSProperties = {
    backgroundColor: styles.messageBgColor,
    border: `1px solid ${styles.messageBorderColor}`,
    color: styles.textColor,
    fontWeight: "bold",
    fontSize: "18px",
    maxWidth: "100%",
    wordBreak: "break-word",
  };

  const toastStyle: React.CSSProperties = {
    position: "absolute",
    top: "-40px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 9999,
    backgroundColor: styles.toastBgColor,
    color: styles.toastTextColor,
    padding: "8px 12px",
    borderRadius: "5px",
    boxShadow: `0 2px 4px ${styles.toastShadowColor}`,
    fontWeight: "bold",
    whiteSpace: "nowrap",
    fontSize: "14px",
  };

  return (
    <div
      className="roadmap-area py-5"
      style={{ backgroundColor: styles.bgColor }}
    >
      <div className="container">
        <div className="referral">
          <h2
            className="mb-4"
            style={{ color: styles.textColor, textAlign: "center" }}
          >
            Referral Program
          </h2>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
            <div
              className="referral-message p-3 rounded mb-3 mb-md-0 me-md-3"
              style={messageStyle}
            >
              You will get your referral link after investing...
            </div>

            <div style={{ position: "relative" }}>
              <button
                id="copyButton"
                className="btn"
                style={buttonStyle}
                onClick={handleCopyLink}
              >
                Copy Link
              </button>

              {showToast && (
                <div style={toastStyle}>Referral link copied to clipboard!</div>
              )}
            </div>
          </div>

          <div className="row">
            {cards.map((card, index) => (
              <div key={index} className="col-md-6 mb-3">
                <div
                  className="card shadow-sm p-3"
                  style={{
                    backgroundColor: styles.cardBgColor,
                    color: styles.cardTextColor,
                  }}
                >
                  <h3>{card.title}</h3>
                  <p id={card.id} className="fs-4 fw-bold">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
