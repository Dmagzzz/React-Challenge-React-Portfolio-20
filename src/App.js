import logo from './logo.svg';
import './App.css';
import {Navbar,Nav,Button,Container,Row,Col,Card} from 'react-bootstrap'



function App() {
  return (
    <div className="App">
     <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">Dillon Maglio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#link">Work</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<div> 
  <h1>Hello, world!</h1>
  <p>
    This is my portfolio!
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</div>


<Container className="mb-5">
  <Row>
    <Col>
	<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>project 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
    <Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>project 2</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
    <Col>
	<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>project 3</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
  </Row>
  <Row>
    <Col>
	<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>project 4</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
    <Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>project 5</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
    <Col>
	<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>project 6</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
  </Row>
</Container>
  
<Card>
  <Card.Header>Contact</Card.Header>
  <Card.Body>
    <Card.Title>Please contact me via email provided below</Card.Title>
    <Card.Text>
      hddod15@gmail.com
    </Card.Text>
    <Button variant="primary">https://www.linkedin.com/in/dillon-maglio-b00476214/</Button>
  </Card.Body>
</Card>

    </div>
  );
}

export default App;
