import React from "react-dom";
import "./OurTeam.css";
const OurTeam = () => {
  return (
    <div className="background">
      <h1 className="Ourteam-h">Team Members</h1>
      <div className="Ourteam-section">
        <div className="person blur-wrapper">
          <img
            src="../../assets/Tomy.jpg"
            alt="Hatem"
            className="img-person"
          />
          <div className="person-title">
            <h4> Hatem Waleed</h4>
            <h6> Front-end Developer</h6>
          </div>
        </div>
        <div className="person blur-wrapper">
          <img
            src="../../assets/s7s.jpg"
            alt="Mohamed Hussien"
            className="img-person"
          />
          <div className="person-title">
            <h4> Mohamed Hussien</h4>
            <h6> Cyber Security</h6>
          </div>
        </div>
        <div className="person blur-wrapper">
          <img
            src="../../assets/Bebo.jpg"
            alt="Ibrahim Mahmoud"
            className="img-person"
          />
          <div className="person-title">
            <h4> Ibrahim Mahmoud</h4>
            <h6> Cyber Security</h6>
          </div>
        </div>
        <div className="person blur-wrapper">
          <img
            src="../../assets/joo.jpg"
            alt="youssef Amr"
            className="img-person"
          />
          <div className="person-title">
            <h4>youssef Amr</h4>
            <h6> Cyber Security</h6>
          </div>
        </div>
        <div className="person blur-wrapper">
          <img
            src="../../assets/Mohamed.jpg"
            alt="Mohamed Khalid"
            className="img-person"
          />
          <div className="person-title">
            <h4>Mohamed Khalid</h4>
            <h6> Data Science</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
