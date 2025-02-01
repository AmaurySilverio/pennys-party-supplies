import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "./ContactPage.css";

const ContactPage = () => {
  const dateTimeLocalNow = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60_000
  )
    .toISOString()
    .slice(0, 10);

  console.log(dateTimeLocalNow);
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <h5>
            Fill out the form below to Reserve equipment for your next Event. We
            will get back to you within 1 business day to go over details about
            your event.
          </h5>
          <h5>
            For more immediate assistance, please call us at{" "}
            <span>978-884-1783</span>
          </h5>
        </div>
        <div className="form-container">
          <form className="contact-form">
            <div className="names-container">
              <label for="name">
                Name:
                <input type="text" id="name" placeholder="Your Name" required />
              </label>
              <div className="phone-container">
                <label for="phone">
                  Phone number:
                  {/* <br />
                  <p>Format: 978-456-7890</p> */}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  minLength="12"
                  maxLength="12"
                  placeholder="978-456-7890"
                  required
                />
              </div>
              {/* <label for="last-name">
                Last Name:
                <input
                  type="text"
                  id="last-name"
                  placeholder="Your Name"
                  required
                />
              </label> */}
            </div>

            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              pattern=".+@example\.com"
              placeholder="youremail@gmail.com"
              required
            />
            <div className="dates-container">
              <label for="date">What date(s) is your event?</label>
              <div className="dates-content">
                <label for="start-date">
                  Start Date:
                  <input
                    type="date"
                    id="start-date"
                    defaultValue={dateTimeLocalNow}
                    min={dateTimeLocalNow}
                    required
                  />
                </label>
                <label for="end-date">
                  End Date:
                  <input
                    type="date"
                    id="end-date"
                    defaultValue={dateTimeLocalNow}
                    min={dateTimeLocalNow}
                    required
                  />
                </label>
              </div>
            </div>
            <label for="occastion">
              What is the occasion? This helps us start brain storming
              decoration ideas.
            </label>
            <textarea
              name="occasion"
              id="occasion"
              rows="5"
              placeholder="My sister is turing 30 and I want to make sure she has an incredbly special birthday!"
              required
            />
            <label for="inquiry">
              What would you like to rent for your event?
            </label>
            <textarea
              name="inquiry"
              id="inquiry"
              rows="5"
              placeholder="I would like to rent 50 black chairs and 8 6ft long tables."
              required
            />
            <label for="anything-else">Anything else we should know?</label>
            <textarea
              name="anything-else"
              id="anything-else"
              rows="5"
              placeholder="Could you deliver the equipment 30 minutes early? It's a surprise party!"
            />
            <Button buttonStyle="btn--outline">Send</Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
