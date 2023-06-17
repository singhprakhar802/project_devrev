import { useEffect, useRef } from "react";
import "./style.css";
import { useGlobalContext } from "../../../context";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
import Bg from "../../../components/backGround/Bg";

const HeroSection = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("dracula");
      setResultTitle("Enter a book name");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/explore");
  };
  return (
    <div className="herosection">
      <Bg />
      <div className="opacity_layer"></div>
      <ContentWrapper>
        <div className="herosectionContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Books, Ebooks and Authors to discover. Explore Now.
          </span>
          <form className="searchInput" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a book..."
              tabIndex={2}
              ref={searchText}
            />
            <button onClick={handleSubmit}>Search</button>
          </form>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroSection;
