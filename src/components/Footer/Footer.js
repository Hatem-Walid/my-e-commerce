import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-container">
        <div className="content">
          <div className="footer-content-item">
            <ul>
              <li>
                <a href="https://www.threads.net/@badbooy_225?xmt=AQGzEj4meWevsixG994V3zybEAzxnB_n-sEyM4gskXu8EwI"> <i className="social fab fa-twitter"></i></a>
              </li>
              <li>
              <a href="https://www.facebook.com/profile.php?id=100012017416963"><i className="social fab fa-facebook-square"></i></a>
              </li>
              <li>
              <a href="https://www.instagram.com/badbooy_225/"><i className="social fab fa-instagram"></i></a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/hatem-waleed-a256a1320/"><i className="social fab fa-linkedin"></i></a>
              </li>
            </ul>
            all copyright going for Tomy &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
