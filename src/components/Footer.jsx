import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import BackToTop from "./BackToTopButton";

const Footer = ({ setPage }) => {
  const spark = "\u2718";

  const columns = [
    {
      heading: [`${spark} Shop`],
      links: ["All Products", "Kitchen", "Home", "Garden"],
    },
    {
      heading: [`${spark} Company`],
      links: ["About Us", "Journal", "Blog", "Press"],
    },
    {
      heading: [`${spark} Support`],
      links: ["FAQ", "Shipping", "Returns", "Contact"],
    },
  ];

  const icons = [
    { icon: faGithub, link: "https://github.com/kxlade/shopping-cart" },
    { icon: faInstagram, link: "https://instagram.com/kxlxde" },
    { icon: faFacebook, link: "https://facebook.com" },
    { icon: faXTwitter, link: "https://twitter.com" },
  ];


  // backToTop.addEventListener("click", () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  // });

  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="footer_brand">
          <button className="footer_logo" onClick={() => setPage("home")}>
            Shopping<span className="navbar_logo-dot">cart</span>
          </button>

          <p className="footer_tagline">
            Your one-stop shop for all your needs
          </p>

          <div className="footer_socials">
            {icons.map((iconn) => (
              <a
                key={iconn.link}
                href={iconn.link}
                className="footer_social-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={iconn.icon} className="footer_social-main" />
              </a>
            ))}
          </div>
            <a href="mailto:kolade525@gmail.com" style={{color: "gold"}}>My Email Address Here!</a>
        </div>

        {columns.map((col) => (
          <div key={col.heading} className="footer_col">
            <h4 className="footer_col-heading">{col.heading}</h4>

            <p className="footer_col-links">
              {col.links.map((link) => (
                <button
                  key={link}
                  className="footer_link-but"
                  onClick={() => setPage("shop")}
                >
                  {link}
                </button>
              ))}
            </p>
          </div>
        ))}

        <BackToTop />
      </div>
      <div className="footer-bottom">
        <span className="footer-bottom-text">
          <hr />
          &copy; 2026 Shoppingcart. All rights reserved.
        </span>
        <span>Privacy . Terms . Accessibility</span>
        {/* <a href="">
          <FontAwesomeIcon icon={faGithub} />
        </a> */}
      </div>
    </footer>
  );
};
export default Footer;
