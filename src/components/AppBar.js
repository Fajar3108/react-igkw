import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import {
  FaHome,
  FaCommentDots,
  FaCompass,
  FaHeart,
  FaCog,
  FaUserCircle,
  FaBookmark,
} from "react-icons/fa";

function AppBar() {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">Instagram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <input
            type="text"
            placeholder="Cari"
            className="text-center ml-auto px-4"
          />
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              <FaHome />
            </Nav.Link>
            <Nav.Link href="#message">
              <FaCommentDots />
            </Nav.Link>
            <Nav.Link href="#explore">
              <FaCompass />
            </Nav.Link>
            <Nav.Link href="#notification">
              <FaHeart />
            </Nav.Link>
            <NavDropdown title="fajar3108.i" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <FaUserCircle className="mr-2" />
                Profil
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <FaBookmark className="mr-2" />
                Disimpan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <FaCog className="mr-2" />
                Pengaturan
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Keluar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
