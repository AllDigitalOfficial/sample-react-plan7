import React from "react";

const ContractData = () => {
  // Get color values from environment variables
  const contractBalanceColor =
    import.meta.env.VITE_APP_CONTRACT_BALANCE_COLOR;
  const cardBgColor = import.meta.env.VITE_APP_CARD_BG_COLOR;
  const cardTextColor = import.meta.env.VITE_APP_CARD_TEXT_COLOR;

  return (
    <div className="container py-5">
      {/* Statistic Cards */}
      <div className="row g-4">
        {/* Deposit Card */}
        <div className="col-md-6 col-lg-3">
          <div
            className="card p-4 text-center shadow-sm h-100"
            style={{
              backgroundColor: cardBgColor,
              border: `1px solid ${contractBalanceColor}`,
              borderRadius: "15px",
            }}
          >
            {/* Deposit Title */}
            <h5 className="mt-3" style={{ color: cardTextColor }}>
              Deposit
            </h5>

            {/* Amount */}
            <p id="total-deposits" className="fs-5 fw-bold text-white">
              0.600 BNB
            </p>
          </div>
        </div>

        {/* Users Card */}
        <div className="col-md-6 col-lg-3">
          <div
            className="card p-4 text-center shadow-sm h-100"
            style={{
              backgroundColor: cardBgColor,
              border: `1px solid ${contractBalanceColor}`,
              borderRadius: "15px",
            }}
          >
            {/* Users Title */}
            <h5 className="mt-3" style={{ color: cardTextColor }}>
              Users
            </h5>

            {/* Amount */}
            <p id="total-users" className="fs-5 fw-bold text-white">
              9
            </p>
          </div>
        </div>

        {/* Withdrawn Card */}
        <div className="col-md-6 col-lg-3">
          <div
            className="card p-4 text-center shadow-sm h-100"
            style={{
              backgroundColor: cardBgColor,
              border: `1px solid ${contractBalanceColor}`,
              borderRadius: "15px",
            }}
          >
            {/* Withdrawn Title */}
            <h5 className="mt-3" style={{ color: cardTextColor }}>
              Withdrawn
            </h5>

            {/* Amount */}
            <p id="withdrawandata2" className="fs-5 fw-bold text-white">
              0.408 BNB
            </p>
          </div>
        </div>

        {/* Ref Rewards Card */}
        <div className="col-md-6 col-lg-3">
          <div
            className="card p-4 text-center shadow-sm h-100"
            style={{
              backgroundColor: cardBgColor,
              border: `1px solid ${contractBalanceColor}`,
              borderRadius: "15px",
            }}
          >
            {/* Ref Rewards Title */}
            <h5 className="mt-3" style={{ color: cardTextColor }}>
              Ref Rewards
            </h5>

            {/* Amount */}
            <p id="ref-rewards" className="fs-5 fw-bold text-white">
              0.052 BNB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractData;
