function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-block">
          <span className="footer-heading">Crescent Lodge Dental Practice</span>
          <span>28 Clapham Common South Side</span>
          <span>London SW4 9BN</span>
        </div>

        <div className="footer-block">
          <span className="footer-heading">Get in touch</span>
          <a href="tel:02076225333">020 7622 5333</a>
          <a href="mailto:reception@dentistsw4.com">reception@dentistsw4.com</a>
        </div>

        <div className="footer-block">
          <span className="footer-heading">Opening hours</span>
          <span>Monday to Friday, 8am to 8pm</span>
          <span>Saturday, 9am to 4:30pm</span>
          <span>Sunday, closed</span>
        </div>
      </div>

      <p className="footer-note">
        Information here is a guide only and is not dental advice.
      </p>
    </footer>
  );
}

export default Footer;
