import * as React from "react";
import {Carousel} from "react-bootstrap";
import carousel1 from 'src/assets/images/carousel1.jpg';


class ControlledCarousel extends React.Component {
 


  public render() {
    return (
            <Carousel slide={true}>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={carousel1} />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={carousel1} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={carousel1} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}

export default ControlledCarousel;
