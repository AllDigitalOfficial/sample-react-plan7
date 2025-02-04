const Footer = () => {
  // Get environment variable values with fallback values
  const companyName =
    import.meta.env.VITE_TITLE || "BnbOath";
  const bgColor = import.meta.env.VITE_COPYRIGHT_BG_COLOR || "#111827";
  const textColor = import.meta.env.VITE_COPYRIGHT_TEXT_COLOR || "#ffffff";

  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="footer-content text-center py-3">
        <p>
          CopyRight {companyName} © {currentYear} . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
