import { Navbar, Container, Nav, Button } from "react-bootstrap"

const Navbars = () => {
  // Environment variables with fallback values
  const {
    VITE_APP_NAVBAR_BG_COLOR: navbarBgColor = "#292d36",
    VITE_APP_BUTTON_BG_COLOR: buttonBgColor = "#007bff",
    VITE_APP_BUTTON_TEXT_COLOR: buttonTextColor = "#ffffff",
    VITE_APP_BUTTON_BORDER_COLOR: buttonBorderColor = "#007bff",
    VITE_APP_DEPOSIT_LINK: depositLink = "#deposit",
  } = import.meta.env

  return (
    <>
      <Navbar
        fixed="top"
        className="py-2 py-lg-3"
        style={{
          backgroundColor: navbarBgColor,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Container>
          <div className="w-100 d-flex flex-column flex-lg-row align-items-center">
            {/* Logo */}
            <Navbar.Brand href="#home" className="navbar-brand-custom mb-2 mb-lg-0">
              <img alt="Logo" src="/bnboath.png" className="logo" />
            </Navbar.Brand>

            {/* Navigation Buttons - Always Visible */}
            <Nav className="nav-buttons">
              <Button
                variant="outline-light"
                className="nav-button"
                onClick={() => (window.location.href = depositLink)}
              >
                Deposit
              </Button>
              <Button variant="outline-light" className="nav-button">
                Connect Wallet
              </Button>
            </Nav>
          </div>
        </Container>
      </Navbar>

      <style>{`
        /* Base styles */
        .navbar-brand-custom {
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
        }

        .logo {
          width: clamp(120px, 20vw, 180px);
          height: auto;
          transition: all 0.3s ease;
        }

        .nav-buttons {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-left: auto;
        }

        .nav-button {
          background-color: ${buttonBgColor};
          color: ${buttonTextColor};
          border-color: ${buttonBorderColor};
          border-radius: 30px;
          padding: clamp(0.4rem, 1vw + 0.5rem, 0.8rem) clamp(0.75rem, 1.5vw + 0.5rem, 1.5rem);
          font-size: clamp(0.75rem, 1vw + 0.4rem, 0.9rem);
          font-weight: 600;
          transition: all 0.3s ease;
          white-space: nowrap;
          min-width: clamp(90px, 15vw, 140px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .nav-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          background-color: ${buttonBgColor}ee;
          border-color: ${buttonBorderColor}ee;
        }

        .nav-button:active {
          transform: translateY(0);
        }

        /* Tablet and mobile styles */
        @media (max-width: 991px) {
          .nav-buttons {
            gap: 0.5rem;
            margin-left: 0;
            width: 100%;
            justify-content: center;
          }

          .nav-button {
            padding: 0.4rem 0.9rem;
            min-width: auto;
            font-size: 0.85rem;
          }

          .navbar-brand-custom {
            max-width: 100%;
            justify-content: center;
          }
        }

        /* Small mobile styles */
        @media (max-width: 576px) {
          .logo {
            width: clamp(100px, 30vw, 120px);
          }

          .nav-button {
            padding: 0.35rem 0.75rem;
            font-size: 0.75rem;
          }

          .nav-buttons {
            gap: 0.3rem;
          }
        }

        /* Touch device optimization */
        @media (hover: none) {
          .nav-button:hover {
            transform: none;
            box-shadow: none;
          }
        }

        /* Ensure proper spacing when fixed navbar is present */
        body {
          padding-top: 80px;
        }

        @media (max-width: 991px) {
          body {
            padding-top: 100px;
          }
        }
      `}</style>
    </>
  )
}

export default Navbars
