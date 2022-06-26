import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../styles/main.module.css';

const Topbar = ({children}:any) => {
    return (
<>
    <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          {/* <img src="https://res.cloudinary.com/duvqwdyz6/image/upload/v1647521846/samples/cloudinary-logo-vector.svg" width="40px" height="40px" />{' '} */}
          Logo
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Category">
              <NavDropdown.Item href="#products/tea">খেলা</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">সর্বশেষ</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">বিশেষ সংবাদ</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">রাজনীতি</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">করোনাভাইরাস</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">বাংলাদেশ</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">বিশ্ব</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">বাণিজ্য</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">মতামত</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">বিনোদন</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">চাকরি</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">জীবনযাপন</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar> 
    {children}
    </>
    )
}
export default Topbar;