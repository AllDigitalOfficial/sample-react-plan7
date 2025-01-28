import React from 'react';

const Levels = () => {
  // Get environment variable values
  const sectionBgColor = import.meta.env.VITE_APP_LEVELS_SECTION_BG_COLOR 
  const titleColor = import.meta.env.VITE_APP_LEVELS_TITLE_COLOR 
  const cardBgColor = import.meta.env.VITE_APP_LEVEL_CARD_BG_COLOR 
  const cardTextColor = import.meta.env.VITE_APP_LEVEL_CARD_TEXT_COLOR 
  const percentageColor = import.meta.env.VITE_APP_LEVEL_PERCENTAGE_COLOR 

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
          {Array.from({ length: 7 }, (_, index) => {
            const level = index + 1;
            const percentage = `${level * 1}%`; // Logic for percentage

            return (
              <div key={level} className="col-md-4 col-lg-3 mb-4">
                <div
                  className="card shadow-sm p-3"
                  style={{
                    backgroundColor: cardBgColor, // Light teal color for levels (from .env)
                    color: cardTextColor, // Text color (from .env)
                    borderRadius: "12px", // Rounded corners for the card
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Soft shadow for a professional look
                  }}
                >
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span style={{ fontWeight: "bold" }}>Level {level}</span>
                      <em
                        style={{
                          color: percentageColor, // Percentage color (from .env)
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
