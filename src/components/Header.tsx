import * as React from "react";
import {Nav,Navbar,NavItem} from "react-bootstrap";
import etsii from 'src/assets/images/etsii.svg';
import us from 'src/assets/images/us.svg';

class Header extends React.Component<{},{}>{

    public render(){
        return(<Navbar staticTop={true} fixedTop={true} className="bg-dark">
            <Navbar.Header>
              <Navbar.Brand>
                <img src={us}/>
                <img src={etsii}/>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">
                Inicio
              </NavItem>
            </Nav>
            <Nav>
              <NavItem eventKey={1} href="#">
                La Escuela
              </NavItem>
            </Nav>
            <Nav>
              <NavItem eventKey={1} href="#">
                Estudios
              </NavItem>
            </Nav>
            <Nav>
              <NavItem eventKey={1} href="#">
                Org. Docente
              </NavItem>
            </Nav>
            <Nav>
              <NavItem eventKey={1} href="#">
                Rel. Externas
              </NavItem>
            </Nav>
            <Nav>
              <NavItem eventKey={1} href="#">
                Servicios
              </NavItem>
            </Nav>
            <Nav>
              <NavItem eventKey={1} href="#">
                Usuarios
              </NavItem>
            </Nav>
          </Navbar>);
    }
}

export default Header;