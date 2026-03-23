import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import './Header.css';
const Header = ({ setPage }) => {

  // const coffee = "\u2615";
  // const blanket = "\uD83C\uDF81";
  // const plant = "\uD83C\uDF3F";



  return (
    <header className="header-cont">
      <div className="header_inner">
        <h1 className="header_title">
          Welcome to{" "}
          <span className="header_title-highlight">Shopping<span className="navbar_logo-dot">cart</span></span>{" "}
          <FontAwesomeIcon icon={faCartArrowDown} fade/>
        </h1>

        <p className="header_subtitle">Your one-stop shop for all your needs</p>

        <button className="header_button" onClick={() => setPage("shop")}>
          Shop Now <FontAwesomeIcon icon={faArrowCircleDown} fade/>
        </button>

      </div>
    </header>
  );
};
export default Header;
