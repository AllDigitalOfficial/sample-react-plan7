const Footer = () => {
  // Get environment variable values
  const companyName = import.meta.env.VITE_COPYRIGHT_COMPANY_NAME;
  const bgColor = import.meta.env.VITE_COPYRIGHT_BG_COLOR;
  const textColor = import.meta.env.VITE_COPYRIGHT_TEXT_COLOR;

  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="footer-content text-center py-3">
        <p>{companyName} © {currentYear} . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
