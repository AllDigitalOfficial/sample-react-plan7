import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Navbars = () => {
  // Get environment variable values from the .env file with fallback values
  const navbarBgColor = import.meta.env.VITE_APP_NAVBAR_BG_COLOR || "#292d36";
  const buttonBgColor = import.meta.env.VITE_APP_BUTTON_BG_COLOR || "#007bff";
  const buttonTextColor =
    import.meta.env.VITE_APP_BUTTON_TEXT_COLOR || "#ffffff";
  const buttonBorderColor =
    import.meta.env.VITE_APP_BUTTON_BORDER_COLOR || "#007bff";

  const depositLink = import.meta.env.VITE_APP_DEPOSIT_LINK || "#deposit";

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top" // Makes the navbar sticky at the top
        className="py-3"
        style={{
          backgroundColor: navbarBgColor, // Apply the background color from the .env
        }}
      >
        <Container>
          {/* Left: Logo */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            {/* Replace BnbOath text with an image */}
            <img
              alt="Logo"
              src="/bnboath.png" // Reference the image stored in the public folder
              className="img-fluid logo" // Added the 'logo' class for custom styling
            />
          </Navbar.Brand>

          {/* Right: Buttons */}
          <Nav className="ms-auto d-flex align-items-center flex-wrap">
            <Button
              variant="outline-light"
              className="me-2 mb-2 btn-responsive"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                borderColor: buttonBorderColor,
                borderRadius: "30px", // Rounded corners
                padding: "10px 25px", // Improved padding for better size
                fontSize: "1rem", // Adjust font size
                transition: "all 0.3s ease", // Smooth transition for hover effects
              }}
              onClick={() => (window.location.href = depositLink)} // Redirect to deposit link
            >
              Deposit
            </Button>
            <Button
              variant="outline-light"
              className="mb-2 btn-responsive"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                borderColor: buttonBorderColor,
                borderRadius: "30px", // Rounded corners
                padding: "10px 25px", // Consistent padding
                fontSize: "1rem", // Adjust font size
                transition: "all 0.3s ease", // Smooth transition for hover effects
              }}
            >
              Connect Wallet
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Internal CSS for Button and Logo Responsiveness */}
      <style>{`
        /* For extra large screens */
        @media (min-width: 1200px) {
          .btn-responsive {
            font-size: 1.1rem;
            padding: 12px 30px;
          }
          
          .logo {
            max-width: 50%;  /* Logo width for extra large screens */
          }
        }

        /* For medium screens (tablets) */
        @media (max-width: 992px) {
          .btn-responsive {
            font-size: 1rem;
            padding: 10px 25px;
          }

          .logo {
            max-width: 60%;  /* Logo width for medium screens */
          }
        }

        /* For smaller screens (mobiles) */
        @media (max-width: 768px) {
          .btn-responsive {
            font-size: 0.9rem;
            padding: 8px 18px;
          }

          .logo {
            max-width: 70%;  /* Logo width for smaller screens */
          }
        }

        /* Hover Effect for Buttons */
        .btn-responsive:hover {
          background-color: #0056b3; /* Darker blue on hover */
          border-color: #0056b3;
        }
      `}</style>
    </>
  );
};

export default Navbars;
