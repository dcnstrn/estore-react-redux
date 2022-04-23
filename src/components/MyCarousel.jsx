import React from "react";
import { Carousel } from "react-bootstrap";

const MyCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="d-block w-100"></div>

          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHEK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100"></div>

          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHEK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100"></div>

          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHEK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MyCarousel;
