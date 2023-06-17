import "./style.css";
import HeroSection from "./herosection/HeroSection.jsx";
import BookList from "../../components/bookCard/BookList";

const Home = () => {
  return (
    <div className="homePage">
      <HeroSection />
      <BookList />
    </div>
  );
};

export default Home;
