import HomePageCardItem from "./HomePageCardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Book us for your next Event!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <HomePageCardItem
              src="images/img-9.jpg"
              text="View all of the Rental Services we provide"
              label="Services"
              path="/ServicesPage"
            />
            <HomePageCardItem
              src="images/img-2.jpg"
              text="Book your next Event with us today!"
              label="Reserve"
              path="/ContactPage"
            />
          </ul>
          <ul className="cards__items">
            <HomePageCardItem
              src="images/img-9.jpg"
              text="View examples of our Decorations"
              label="Decorations"
              path="/DecorationsPage"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
