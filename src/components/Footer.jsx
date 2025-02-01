import { Link } from "react-router-dom";
import Button from "./Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              PPS <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join Penny's newsletter to stay in the loop about our latest deals
        </p>
        {/* <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p> */}
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Sign Up</Button>
          </form>
        </div>
      </section>
      {/* <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <a href="https://www.instagram.com/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div> */}
      <small className="website-rights">PPS © {new Date().getFullYear()}</small>
    </div>
  );
};

export default Footer;
