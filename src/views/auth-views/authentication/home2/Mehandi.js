import React from "react";
import { Badge, Button, Row, Col } from "antd";
import { HeartFilled, StarFilled } from "@ant-design/icons"; // Import the icons
import "./Mehandi.css";
import pic1 from "../../../../assets/vivaahaa/rec.png";

const services = [
  {
    name: "Rithikas Mehendi Art",
    location: "Adyar, Chennai",
    price: 5000,
    rating: 4.5,
    label: "MOST POPULAR",
    image: pic1,
  },
  {
    name: "Rithikas Mehendi Art",
    location: "Adyar, Chennai",
    price: 5000,
    rating: 4.5,
    label: "PREMIUM",
    image: pic1,
  },
  {
    name: "Rithikas Mehendi Art",
    location: "Adyar, Chennai",
    price: 5000,
    rating: 4.5,
    image: pic1,
  },
];

const MehendiCard = ({ service }) => {
  return (
    <div className="mehendi-card">
      <div className="for_ribbon">
        {service.label && (
          <Badge.Ribbon
            text={
              <>
                {service.label === "MOST POPULAR" && <HeartFilled />}{" "}
                {service.label === "PREMIUM" && <StarFilled />}{" "}
                {service.label}
              </>
            }
            color={service.label === "MOST POPULAR" ? "magenta" : "gold"}
          />
        )}
      </div>
      <img src={service.image} alt="Mehendi" className="mehendi-image" />
      <div
        className="mehendi-content"
        style={{ background: "#FFFFFF47", backdropFilter: "blur(60px)" }}
      >
        <h3 className="custom_h3">{service.name}</h3>
        <p className="location custom_text">{service.location}</p>
        <div className="price-rating">
          <span className="price">
            <span className="custom_span_one">
              Starting From
              <br />
            </span>
            ₹{service.price}
          </span>
          <Button
            type="primary"
            className="enquiry-button"
            style={{ padding: "11.5px 30px" }}
          >
            Enquiry Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const MehendiGrid = () => {
  return (
    <div className="mehendi-grid mt-4">
      <Row gutter={[16, 16]} style={{ margin: 0, width: "100%" }}>
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <MehendiCard service={service} />
          </Col>
        ))}
      </Row>
      {/* <div className="text-center mt-4">
        <Button type="primary" className="load-more-button">
          Show more Mehndi Artist
        </Button>
      </div> */}
    </div>
  );
};

export default MehendiGrid;
