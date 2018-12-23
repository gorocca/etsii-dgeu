import * as React from "react";
import {Carousel} from "react-bootstrap";
import carousel1 from 'src/assets/images/carousel1.jpg';

const margin = {margin: "10% 10% 10% 10%"};

class ControlledCarousel extends React.Component{

  public render() {
    return (
        <div style = {margin} >
           <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src={carousel1}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
  }
}

export default ControlledCarousel;
