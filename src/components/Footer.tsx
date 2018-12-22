import * as React from "react";
import {Navbar} from "react-bootstrap";
import facebook from 'src/assets/images/facebook.svg';
import twitter from 'src/assets/images/twitter.svg';


class Footer extends React.Component{
    public render(){
        return(<Navbar fixedBottom={true} className="bg-dark">
            <div className="row">
              <div className="col-md-4 text-white">
                <p>Escuela Técnica Superior de Ingeniería Informática - Universidad de Sevilla Av. Reina Mercedes s/n, 41012 Sevilla - tlfno +(34) 954556817  </p>
              </div>
              <div className="col-md-4 text-align-center text-white">
                <span >© 2018 ETSII</span>
              </div>
              <div className="col-md-2 text-align-center ">
                  <img src={facebook} className="w-50 h-50" />
              </div>
              <div className="col-md-2 text-align-center" >
                <img src={twitter} className="w-50 h-50" />
              </div>
            </div>
          </Navbar>);}
}

export default Footer;