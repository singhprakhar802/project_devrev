import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
// import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./header.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();

  const navigationHandler = (type) => {
    if (type === "explore") {
      navigate("/explore");
    } else if (type === "login") {
      navigate("/login");
    } else if (type === "register") {
      navigate("/register");
    }
  };

  const openSearch = () => {
    setShowSearch(true);
  };
  return (
    <header className="header">
      <div className="contentWrapper">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("explore")}>
            Explore
          </li>
          <li className="menuItem" onClick={() => navigationHandler("login")}>
            Login
          </li>
          <li
            className="menuItem"
            onClick={() => navigationHandler("register")}
          >
            Register
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
      </div>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input type="text" placeholder="Search..." tabIndex={1} />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
