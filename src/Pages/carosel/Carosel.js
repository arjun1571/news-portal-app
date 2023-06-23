import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../asset/1.png"
import img2 from "../../asset/2.png"
import img3 from "../../asset/3.png"
const Carosel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Carosel;