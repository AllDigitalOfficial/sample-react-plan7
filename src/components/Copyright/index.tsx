const Copyright = () => {
  // Get environment variable values (not needed in this case)
  const bgColor = import.meta.env.VITE_APP_COPYRIGHT_BG_COLOR || "#000000"; 
  const textColor = import.meta.env.VITE_APP_COPYRIGHT_TEXT_COLOR || "#ffffff"; // Default text color

  return (
    <footer style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="footer-content text-center py-3">
        <p>Copyright © 2025 BnbOath All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Copyright;
