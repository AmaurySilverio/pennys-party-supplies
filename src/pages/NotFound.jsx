import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./NotFound.css";
const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="not-found-container">
        <p>
          We can't find the page you are looking for. Click the home button
          above to go back to Penny's Party Supplies!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
