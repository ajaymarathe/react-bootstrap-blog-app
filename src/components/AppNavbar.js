import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown, Image } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" className='mb-5 shadow-sm'>
      <Container>
        <Navbar.Brand href="/">BlogApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <NavDropdown
              title={
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle
                  style={{ width: '40px', height: '40px' }}
                  alt="Profile"
                />
              }
              id="profile-dropdown"
              align="end"
            >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
