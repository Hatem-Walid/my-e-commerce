import React from "react";
import "./features.css";

const features = [
  {
    title: "Free Shipping",
    text: "The product is eligible for Free delivery.",
    icon: "fas fa-truck",
  },
  {
    title: "Return Policy",
    text: "As per our return policy, we need to verify your identity to process return.",
    icon: "fas fa-sync",
  },
  {
    title: "24/7 Support\n",
    text: "Reach out to us through any of these support channels.",
    icon: "fas fa-headset",
  },
  {
    title: "Secure Payment",
    text: "We work hard to protect your security and privacy.",
    icon: "fas fa-money-check-alt",
  },
];
const Features = () => {
  return (
    <section className="features-area section_gap py-5">
      <div className="container">
        <div className="features-row">
          {features.map((feature, index) => (
            <div className="single-features" key={index}>
              <span className="features-icon">
                <i className={feature.icon} />
              </span>
              <div className="desc">
                <h6 className="title-feature">{feature.title}</h6>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
