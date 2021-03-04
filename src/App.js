
import './App.css';

import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import People from './people';
import Person from './person';
import Main from './main';
import PeopleJson from './peopleJson';

function App() {
  return ( <>
    <Navbar bg="light" expand="lg">
    <LinkContainer to="/">
    <Navbar.Brand href="#home">Digital health Passport</Navbar.Brand>
    </LinkContainer>
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/main">
    <Nav.Link>Main</Nav.Link>
    </LinkContainer>
      <LinkContainer to="/People">
    <Nav.Link>vaccinated people list</Nav.Link>
    </LinkContainer>

    </Nav>
    
  </Navbar.Collapse>
</Navbar>


<br />
    <Container>
     <Row>
      <Col>
        <Switch>
         <Route exact path="/">
            <Redirect to="/main" />
         </Route>
         <Route exact path="/main" component={Main} />
         <Route exact path="/People" component={People} />
         <Route exact path="/peopleJson" component={PeopleJson} />
         <Route path="/Person/:id" render={(props) => <Person id={props.match.params.id} />} />
         <Route component={Main} />

        </Switch>
      </Col>
      </Row>
    </Container>

   </>
  );
}

export default App;
