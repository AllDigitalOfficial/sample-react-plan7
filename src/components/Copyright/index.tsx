const Copyright = () => {
  // Get environment variable values
  const companyName = import.meta.env.VITE_COPYRIGHT_COMPANY_NAME;
  const bgColor = import.meta.env.VITE_COPYRIGHT_BG_COLOR;
  const textColor = import.meta.env.VITE_COPYRIGHT_TEXT_COLOR;

  return (
    <footer style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="footer-content text-center py-3">
        <p>{companyName} © 2025 . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Copyright;
