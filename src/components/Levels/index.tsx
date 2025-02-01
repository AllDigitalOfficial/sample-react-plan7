import React from "react";

const Levels = () => {
  // Get environment variable values with fallback values
  const sectionBgColor =
    import.meta.env.VITE_APP_LEVELS_SECTION_BG_COLOR || "#111827";
  const titleColor = import.meta.env.VITE_APP_LEVELS_TITLE_COLOR || "#ffffff";
  const cardBgColor = import.meta.env.VITE_APP_LEVEL_CARD_BG_COLOR || "#c2fcec";
  const cardTextColor =
    import.meta.env.VITE_APP_LEVEL_CARD_TEXT_COLOR || "#000000";
  const percentageColor =
    import.meta.env.VITE_APP_LEVEL_PERCENTAGE_COLOR || "#000000";

  // Get initial values for each level from the environment variables
  const levels = Array.from({ length: 7 }, (_, index) => {
    const level = index + 1;
    // Dynamically fetch the level value from the environment variable (e.g., VITE_APP_LEVEL_1_VALUE)
    const value = parseFloat(
      import.meta.env[`VITE_APP_LEVEL_${level}_VALUE`] || "0"
    ); // Default value is 0 if not found
    const percentage = `${level * 1}%`; // Percentage logic as before

    return { level, value, percentage };
  });

  return (
    <section
      className="user-details-wrapper py-5"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="container">
        {/* Title: Referral Levels */}
        <h2
          className="mb-4"
          style={{ color: titleColor, textAlign: "center", fontWeight: "bold" }}
        >
          Referral Levels
        </h2>
        <div className="row">
          {levels.map(({ level, value, percentage }) => (
            <div key={level} className="col-md-4 col-lg-3 mb-4">
              <div
                className="card shadow-sm p-3"
                style={{
                  backgroundColor: cardBgColor,
                  color: cardTextColor,
                  borderRadius: "12px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span style={{ fontWeight: "bold" }}>Level {level}</span>
                    <em
                      style={{
                        color: percentageColor,
                        fontWeight: "500",
                      }}
                    >
                      {percentage}
                    </em>
                  </div>
                  <h3
                    id={`level-${level}`}
                    className="text-center"
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    {value}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Levels;
