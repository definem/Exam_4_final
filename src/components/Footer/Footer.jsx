import Instagram from "../../assets/icons/social-insta.svg";
import WhatsUpp from "../../assets/icons/social-whatsup.svg";
import Facebook from "../../assets/icons/social-facebook.svg";
import "./style.scss";


const Footer = () => {
  return (
    <footer >
      <div className="container foo">
        <div className="foo__top ">
          <div className="div1">
            <ul>
              <li>
                <p className="div1__title">Follow us</p>
                <a className="div1__tel footer-items" href="tel:123-456-7890">
                  123-456-7890
                </a>
              </li>
              <li className=" footer-items">
                <img src={Instagram} alt="insta-icon" />
                <img src={WhatsUpp} alt="whatsup-icon" />
                <img src={Facebook} alt="facebook-icon" />
              </li>
            </ul>
          </div>

          <div className="foo__links">
            <ul className=" foo__list">
              <li className="footer-items">Help</li>
              <li className="footer-items">Contact us</li>
              <li className="footer-items">Delivery information</li>
              <li className="footer-items">Payment information</li>
              <li className="footer-items">Customer service</li>
              <li className="footer-items">FAQ</li>
            </ul>
          </div>

          <div className="foo__links">
            <ul className="foo__list">
              <li className="footer-items">About us</li>
              <li className="footer-items">Our Stores</li>
              <li className="footer-items">Flower care</li>
              <li className="footer-items">Site map</li>
            </ul>
          </div>

          <div className="foo__links">
            <ul className="foo__list">
              <li className="footer-items">Legal</li>
              <li className="footer-items">Privacy policy</li>
              <li className="footer-items">Terms & Conditions</li>
              <li className="footer-items">Cookie policy</li>
            </ul>
          </div>
        </div>
        <hr className="foo__hr" />
        <p className="foo__copy-text">© Copyright, SERIUS</p>
      </div>
    </footer>
  );
};

export default Footer;

