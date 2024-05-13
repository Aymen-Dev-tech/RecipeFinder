import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className=" px-24 max-[950px]:px-1">
      <h3 className="text-2xl font-bold">RecipeFinder</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Recipe</a>
        <a href="/#">Community</a>
        <a href="/#">About Us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
