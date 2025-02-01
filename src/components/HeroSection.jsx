import Button from "./Button";
import "./HeroSection.css";
import "../index.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted type="video/mp4" /> */}
      <h1>Penny's Party Supplies</h1>
      <p>Party Supplies, Decorations and Design</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/servicesPage"
        >
          SERVICES
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/"
        >
          EXAMPLES OF WORK <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
