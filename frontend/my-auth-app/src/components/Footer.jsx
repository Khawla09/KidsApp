
import React from 'react';
import '../styling/footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">© 2024 Your Company Name. All rights reserved.</p>
        <p className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a> | 
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
