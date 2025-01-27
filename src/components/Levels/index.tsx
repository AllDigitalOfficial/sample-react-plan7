const Levels = () => {
  // Get environment variable values
  const sectionBgColor =
    import.meta.env.VITE_APP_LEVELS_SECTION_BG_COLOR || "#f8f9fa";
  const titleColor = import.meta.env.VITE_APP_LEVELS_TITLE_COLOR || "#000000";
  const cardTextColor =
    import.meta.env.VITE_APP_LEVEL_CARD_TEXT_COLOR || "#ffffff"; // White text for better contrast
  const levelColor = "#17a2b8"; // Set all levels to the same teal green color
  const percentageColor =
    import.meta.env.VITE_APP_LEVEL_PERCENTAGE_COLOR || "#000000"; // Default percentage color

  return (
    <section
      className="user-details-wrapper py-5"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="container">
        {/* Updated title to "Referral Levels" and centered */}
        <h2 className="mb-4" style={{ color: titleColor, textAlign: "center" }}>
          Referral Levels
        </h2>
        <div className="row">
          {Array.from({ length: 7 }, (_, index) => {
            const level = index + 1;
            const percentage = `${level * 1}%`; // Simple logic for percentage

            return (
              <div key={level} className="col-md-4 col-lg-3 mb-4">
                <div
                  className="card shadow-sm p-3"
                  style={{
                    backgroundColor: levelColor, // Use the teal green color for all levels
                    color: cardTextColor, // Text color for visibility
                  }}
                >
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span>Level {level}</span>
                      <em
                        style={{
                          color: percentageColor,
                        }}
                      >
                        {percentage}
                      </em>
                    </div>
                    <h3 id={`level-${level}`} className="text-center">
                      0
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Levels;
