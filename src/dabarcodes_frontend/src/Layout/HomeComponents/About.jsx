import React from "react";
import "../../components/style/Home.css";

const About = () => {
  return (
    <div id="about" className="section-container font-roboto">
      <div className="container">
        <div className="box">
          <div className="header">
            <h1 className="roboto-medium"> What is DaBarcodes</h1>
            <p>
              daBarcodes bridges the gap between customers, suppliers, and
              retailers through a unique promotional platform. Whether you're
              here to save, promote, or analyze, daBarcodes offers the perfect
              solution.
            </p>
          </div>
          <div className="boxes font-roboto">
            <div className="smallboxes roboto-medium">
              <p className="roboto-medium">
                Start Your Savings <br /> Journey
              </p>
              <div className="image">
                <img src="/image/image 50.png" alt="image" />
              </div>
              <div className="primary-btn">
                <p>Join as customers → </p>
              </div>
            </div>

            <div className="smallboxes">
              <p className="">
                Insights and <br />
                Preferences
              </p>
              <div className="image">
                <img src="/image/image 51.png" alt="image" />
              </div>
              <div className="primary-btn">
                <p>Join as retailer → </p>
              </div>
            </div>
            <div className="smallboxes">
              <p className="">
                Promote Your <br />
                Products Effortlessly
              </p>
              <div className="image">
                <img src="/image/image 52.png" alt="iamge" />
              </div>
              <div className="primary-btn">
                <p>Join as suppliers → </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
