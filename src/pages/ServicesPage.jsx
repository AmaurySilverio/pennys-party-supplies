import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import "../components/Cards.css";
const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="cards">
        <div className="cards-header-container">
          <h1>Our Rental Services</h1>
          <h4>
            Welcome to Penny's Party Supplies & More - Your Premier Event Rental
            Experience in the North Shore Area!
          </h4>
          <p>
            We pride ourselves on providing a hassle-free experience, offering a
            wide range of services including tables, chairs, linens, napkins,
            sashes & chair covers. We extend our services to the Greater Boston
            Area. With Penny's Party Supplies, you can seamlessly transform your
            event space with our high-quality rentals. Opt for our full setup
            and breakdown services for an additional small fee, allowing you to
            enjoy your special occasion stress-free. Choose elegance, choose
            convenience – choose Penny's Party Supplies for all your event
            rental needs.
          </p>
        </div>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="services__cards__items">
              <CardItem
                src="images/black-chair.jpg"
                text="Black Fold-up Chairs"
                label="$3.50"
                path=""
              />
              <CardItem
                src="images/pink-chair.webp"
                text="Pink Fold-up Chairs"
                label="$3.50"
                path=""
              />
              <CardItem
                src="images/6ft-table.webp"
                text="6 Foot Tables"
                label="$15.00"
                path=""
              />
              <CardItem
                src="images/round-table.webp"
                text="Round Tables"
                label="$15.00"
                path=""
              />
              <CardItem
                src="images/long-linen.webp"
                text="Long Linen Table Cloths"
                label="$16.00"
                path=""
              />
              <CardItem
                src="images/round-linen.webp"
                text="Round Linen Table Cloths"
                label="$16.00"
                path=""
              />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
