import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
    { icon: faInstagram, link: "https://instagram.com/kxlxde" },
    { icon: faFacebook, link: "https://facebook.com" },
    { icon: faXTwitter, link: "https://twitter.com" },
  ];

  let backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 25) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
  }

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
                <FontAwesomeIcon icon={iconn.icon} />
              </a>
            ))}
          </div>
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

        <div
          className="back-to-top"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABQ1JREFUeNrkW1lP1FAUvm2n48KAoqDiRogSt6jRRBPGF33TaPTB7Qf4u/wBxrhgjNEHoy9i1AfiFpUocURQx3FBiODMdOo58N1QazszHW5Lp5zky4TQ3t7vnnPPdltNhCethA7CGkIGf8vfVlwzAUw6fvOEAv5WLpri8VYSugmbCJsJ6wkGoUKwXZDPd0InWIQxwgfCCOE9YTxuhJlcHwgy6aWEEqHc4HgpgkmYJvwgfCI8xCIsKGE21yxhN2EZNGk5NDhf0WEhPM8pwnPCAMw+UsKrCAcI+wht0KYtwhUNWv9FGCQ8IXyPgvAOwlHCWhC1RLRigPgXwm3Cq6A3BzEv3qcn4WWLEWjVS2z4Bp7Ddiz6aL1zqZfwUmj1MKzCEgsvFcy/l9ACh1ZWQZhX8ixhLx5SEfERGwrgKNFFGIblNUw4TTjnMB1bxE9kXGef0ok9bTVCmP93DJqNK1m3iXdi+73zm281wn3Ys1YTkHVqeyNi9kgQwtvhjbUmIusMtT0IWwWvUOOWdphyOmYOKohpp8GhvR7CBx1JRbNKCRwO1iK8BuliM5N1kt4HTr6Es8iNrQQQtsAl60eYa9g9CdGuU8t7wO0/wlnEMDtBhG1wyroJr0BqVhHJkwq4rXAS7oYLtxJI2AK3bklYJt9RmnMaHRIjQrNmjhr3jjJgX47g4dKiOMH/imZCRwSOsgyOmRQe2BXBQ1Mo3e6iPVPE73HCNkwqLAsrgWOHjgrDCNmkUkjorxEeOGrWb4RLhJe4JuzWUGcKBb4d8n7lpnq/8O4//cFCsC/ZGaKlMcdWHYQrIZLl04SronqzjbV/hfAG94QVnmYIZ0LSsAnNMpGhOq6fhqY/grQdgoYzUsNhOKhJEBgKcB8v0GV48DA0HYpJmzBR3rOvfa7ZRTji87+vsIpxxaRnTJo91yGFA+swzX54Xi/heHgGXRW2glGPa5gsnydtJSxRZN7sFEsGqok2BYPKU4ybhKc+13Btel7MHrhVQD6P8OQWPkT7ieRExaEfc/2mC3XnsGns10Gf/3M+ew5xv4gcl9PLU4QNPve8wLZQZYETOsxK1Qp+9rGU5TDj9SCrOVI+XojTXv0nSF5RYsTPnJQa1hW5/SVenhFke4T3qQAnHutAus1nsWxF/mXCgIntUFAa8qRaQKCE0LSFcAK/pRol3GpUNEVHScfefD/Gmi9pHuOp7OFeUFQt6eLfQ/EUUA4wqTLu18TcYbiKsMljX+QJFhACTEWxThNzryxoARey7LjfwKKpIGuCY0E6rZzCasXr5ZVG71eZ+eWk0+KBPyBhUP1WTxxEAzfmaEvvnEOgNxJI2AC3nLPlIlM5PYGEdXAbFy6CAwk0a2nOA+6mGgufpz5T5K3jIiY4jXgRllr+lZC9bIDLgNu+3XnrYEK0bIJLvhphlsdi9vTcbHKyX8DlP7V79ZZkHWqI5jtc05GxXRez/bGahAXSTU72e5vQKzPhO351eTXnNIbSbHOTaFnm4I8I90UDry3xDe9RtK8V8T5K1dAVeQNTLldz3aJGnTqMmrnTsRBx27MpkOWG/1StWFVLihiMuxkbRbze3ZLHvWzGNwi/6wnO9dapb+HBe0Q83uEyMS92UPdEnWdSQTIqGylaXsx922AvgLYNWBs37Pvhje0gNwcVDllDMPXV8OSVCB0TNyz4g49bwud9ylqDzEcWzUceblk0n/G4ZdF8qOUlsfwU768AAwBvlGfu64jWvQAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-bottom-text">
          <hr />
          &copy; 2026 Shoppingcart. All rights reserved.
        </span>
        <span>Privacy . Terms . Accessibility</span>
      </div>
    </footer>
  );
};
export default Footer;
