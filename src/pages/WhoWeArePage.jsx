import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./WhoWeArePage.css";

const WhoWeArePage = () => {
  return (
    <>
      <Navbar />
      <div className="who-we-are-container">
        <div className="photo-container">
          <img src="/images/cherry-blossom.jpg" />
        </div>
        <div className="about-us-container">
          <h3 className="about-us-heading">About Us</h3>
          <div className="about-us-text">
            <p>
              Downtime Bakery is a bakery and cafe located at 6624 Germantown
              Avenue in Mt. Airy, Philadelphia founded by bakers Dayna Evans and
              Sam Carmichael. It began as a cottage bakery in 2022 with a focus
              on sourdough bagels. At the brick-and-mortar cafe, neighbors can
              get breads, bagels, sandwiches, pastries, and coffee, Thursday
              through Sunday from 9am to 3pm.
            </p>
            <p>
              We specialize in naturally leavened breads made with organic and
              locally milled grains, as well as pastries and baked goods made
              with seasonal, local produce.
            </p>
            <p>
              Our coffee is roasted by Poem Roasting, based in Philadelphia.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhoWeArePage;
