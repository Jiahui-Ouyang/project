import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar, Nav, NavDropdown, Form, Container,Button,Row,Col
} from 'react-bootstrap';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LogIn from './LogIn'

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="primary">
        <Navbar.Brand ><Link to = "/Home">Food_deliver</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/a">
                Fast Food
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/b">
                Healthy Food
                </Link>
            </Nav.Link>
            <NavDropdown title="Drinks & Desserts" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link >
              <Link to="/login">
                Log In / Sign Up
              </Link></Nav.Link></Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/a">
          <a />
        </Route>
        <Route path="/b">
          <b />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <Container>
      <div><h1>Recommend to you: </h1></div>

                <Row><Col></Col></Row>


        </Container>
  )
}
export default App;
