import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import picone from "../../../../assets/vivaahaa/slide1.png";
import pictwo from "../../../../assets/vivaahaa/slide2.png";
import picthree from "../../../../assets/vivaahaa/slide3.png";
import diito from "../../../../assets/vivaahaa/Vector.png";

import "./CarosuelComp.css";

const CouplesCarousel = () => {
  return (
    <div className="container my-5">
      <div className="couples-carousel">
        <h2 className="carousel-title my-5">
          Our Couples <span className="highlight">Happy Stories</span>
        </h2>
        <Carousel className="custom-carousel w-100">
          <Carousel.Item>
            <div className="carousel-content">
              <div className="carousel-image-container previous">
                <div className="carousel-img">
                  <img src={picone} alt="Happy Couple 1" />
                </div>
              </div>
              <div className="carousel-main-content custom_center">
                <div className="main-story-img">
                  <img src={picthree} alt="Main Story Couple" />
                </div>
                <div className="custom_testo">
                  <div className="testimonial">
                    <div className="custom_ditto mb-3 ">
                      <div className="mx-1">
                        <img src={diito} alt="" />
                      </div>
                      <div className="mx-1">
                        <img src={diito} alt="" />
                      </div>
                    </div>
                     
                      <div>

                    <p className="testimonial-text mb-3">
                      Lorem ipsum dolor sit amet consectetur. Bibendum erat
                      scelerisque non sagittis placerat mauris mi venenatis
                      dictum. Lorem ipsum dolor sit amet dolor dolor dolor dolor
                      dolor sit amet consectetur. Lorem ipsum dolor sit amet
                      dolor dolor dolor dolor dolor sit amet consectetur.
                    </p>
                    </div>
                    <div className="custom_manger">
                    <h4>Arun Kumar</h4>
                    <p>CTS Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-image-container next">
                <div className="carousel-img">
                  <img src={pictwo} alt="Happy Couple 2" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* Repeat <Carousel.Item> for other slides */}
          <Carousel.Item>
            <div className="carousel-content">
              <div className="carousel-image-container previous">
                <div className="carousel-img">
                  <img src={picone} alt="Happy Couple 1" />
                </div>
              </div>
              <div className="carousel-main-content custom_center">
                <div className="main-story-img">
                  <img src={picthree} alt="Main Story Couple" />
                </div>
                <div className="custom_testo">
                  <div className="testimonial">
                    <div className="custom_ditto mb-3 ">
                      <div className="mx-1">
                        <img src={diito} alt="" />
                      </div>
                      <div className="mx-1">
                        <img src={diito} alt="" />
                      </div>
                    </div>
                     
                      <div>

                    <p className="testimonial-text mb-3">
                      Lorem ipsum dolor sit amet consectetur. Bibendum erat
                      scelerisque non sagittis placerat mauris mi venenatis
                      dictum. Lorem ipsum dolor sit amet dolor dolor dolor dolor
                      dolor sit amet consectetur. Lorem ipsum dolor sit amet
                      dolor dolor dolor dolor dolor sit amet consectetur.
                    </p>
                    </div>
                    <div className="custom_manger">
                    <h4>Arun Kumar</h4>
                    <p>CTS Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-image-container next">
                <div className="carousel-img">
                  <img src={pictwo} alt="Happy Couple 2" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-content">
              <div className="carousel-image-container previous">
                <div className="carousel-img">
                  <img src={picone} alt="Happy Couple 1" />
                </div>
              </div>
              <div className="carousel-main-content custom_center">
                <div className="main-story-img">
                  <img src={picthree} alt="Main Story Couple" />
                </div>
                <div className="custom_testo">
                  <div className="testimonial">
                    <div className="custom_ditto mb-3 ">
                      <div className="mx-1">
                        <img src={diito} alt="" />
                      </div>
                      <div className="mx-1">
                        <img src={diito} alt="" />
                      </div>
                    </div>
                     
                      <div>

                    <p className="testimonial-text mb-3">
                      Lorem ipsum dolor sit amet consectetur. Bibendum erat
                      scelerisque non sagittis placerat mauris mi venenatis
                      dictum. Lorem ipsum dolor sit amet dolor dolor dolor dolor
                      dolor sit amet consectetur. Lorem ipsum dolor sit amet
                      dolor dolor dolor dolor dolor sit amet consectetur.
                    </p>
                    </div>
                    <div className="custom_manger">
                    <h4>Arun Kumar</h4>
                    <p>CTS Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-image-container next">
                <div className="carousel-img">
                  <img src={pictwo} alt="Happy Couple 2" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-content">
              <div className="carousel-image-container previous">
                <div className="carousel-img">
                  <img src={picone} alt="Happy Couple 1" />
                </div>
              </div>
              <div className="carousel-main-content custom_center">
                <div className="main-story-img">
                  <img src={picthree} alt="Main Story Couple" />
                </div>
                <div className="custom_testo">
                  <div className="testimonial">
                    <div className="custom_ditto mb-3 ">
                      <div className="mx-1">
                        <img src={diito} alt="" />
                      </div>
                      <div className="mx-1">
                        <img src={diito} alt="" />
                      </div>
                    </div>
                     
                      <div>

                    <p className="testimonial-text mb-3">
                      Lorem ipsum dolor sit amet consectetur. Bibendum erat
                      scelerisque non sagittis placerat mauris mi venenatis
                      dictum. Lorem ipsum dolor sit amet dolor dolor dolor dolor
                      dolor sit amet consectetur. Lorem ipsum dolor sit amet
                      dolor dolor dolor dolor dolor sit amet consectetur.
                    </p>
                    </div>
                    <div className="custom_manger">
                    <h4>Arun Kumar</h4>
                    <p>CTS Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-image-container next">
                <div className="carousel-img">
                  <img src={pictwo} alt="Happy Couple 2" />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CouplesCarousel;
