import background from "../../assets/background.jpg";
import Img from "../lazyloadImage/Img";

const Bg = () => {
  return (
    <div className="bg_section">
      <div className="background_img">
        <Img src={background} />
      </div>
      <div className="opacity_layer"></div>
    </div>
  );
};

export default Bg;
