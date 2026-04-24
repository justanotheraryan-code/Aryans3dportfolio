import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:aryan3374@gmail.com"
                data-cursor="disable"
              >
                aryan3374@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+917042665021"
                data-cursor="disable"
              >
                +91-7042665021
              </a>
            </p>
            <h4>Education</h4>
            <p>
              PGP — Technology &amp; Business Management, Masters' Union — 2025–Present
            </p>
            <p>
              BCom (Honours), NMIMS Anil Surendra Modi School of Commerce — 2021–2024
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/notjustanotheraryan"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn — notjustanotheraryan <MdArrowOutward />
            </a>
            <a
              href="mailto:ylc27aryan.sharma@mastersunion.org"
              data-cursor="disable"
              className="contact-social"
            >
              Email (MU) <MdArrowOutward />
            </a>
            <a
              href="mailto:aryan3374@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email (Personal) <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio of <br /> <span>Aryan Sharma</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
