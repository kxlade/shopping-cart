// Navbar.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "./Menu-Button";
import { useState } from "react";

const Navbar = ({ page, setPage }) => {
    const [showAbout, setShowAbout] = useState(false);

    const links = [
        { name: "Home"},
        { name: "Shop" },
        { name: "About" },
        { name: "Cart" }
    ];

    // This is the clean toggle function
    const toggleAbout = () => {
        setShowAbout(prev => !prev);   // flips true → false  or  false → true
    };

    return (
        <nav className="navbar">
            <div className="navbar_inner">
                <h1 className="navbar_logo" onClick={() => setPage("home")}>
                    Shopping<span className="navbar_logo-dot">cart</span>{" "}
                    <FontAwesomeIcon icon={faCartShopping} />
                </h1>

                <div className="navbar_actions">
                    {/* // Inside the map: */}
                    {links.map((cont) => {
                        if (cont.name === "About") {
                            return (
                                <div className="navbar_buts" key={cont.name}>
                                    <button
                                        className={`comic-button ${showAbout ? "active" : ""}`}
                                        onClick={toggleAbout}
                                    >
                                        About
                                    </button>
                                </div>
                            );
                        }

                        return (
                            <div className="navbar_buts" key={cont.name}>
                                <button
                                    className={`comic-button ${page === cont.name.toLowerCase() ? "active" : ""}`}
                                    onClick={() => setPage(cont.name.toLowerCase())}
                                >
                                    {cont.name}
                                </button>
                            </div>
                        );
                    })}


                    {/* Use the toggle function here */}
                    <Button onClick={toggleAbout} />
                </div>
            </div>

            {/* Show/hide with conditional rendering */}
            {showAbout && (
                <div className="about-text">
                    <h4>About Us</h4>
                    <p>
                        We are a team of passionate individuals dedicated to providing the
                        best shopping experience & support.
                    </p>
                    {/* Optional: close button inside the box */}
                    <button
                        className="close-about-btn"
                        onClick={toggleAbout}
                        style={{ marginTop: "12px", fontSize: "0.9rem" }}
                    >
                        Close &times;
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;