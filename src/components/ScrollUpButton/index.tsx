import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ArrowUp } from "react-bootstrap-icons";

const ScrollToTopButton: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Get environment variable values for ScrollToTopButton
  const arrowButtonColor =
    import.meta.env.VITE_APP_ARROW_BUTTON_COLOR || "#ffffff";
  const arrowButtonBgColor =
    import.meta.env.VITE_APP_ARROW_BUTTON_BG_COLOR || "#192337";

  // Show button when the page is scrolled down
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  // Scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: showScroll ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: arrowButtonBgColor,
        border: "none",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <ArrowUp size={24} color={arrowButtonColor} />
    </Button>
  );
};

export default ScrollToTopButton;
