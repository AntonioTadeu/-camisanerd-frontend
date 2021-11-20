import * as React from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/home" style={{color:'white'}}>Loja Camisa Nerds</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#" style={{color:'white'}}>Mais vendidos</Nav.Link>
                <NavDropdown title="Categorias" style={{color:'white'}} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#Masculino">Masculino</NavDropdown.Item>
                  <NavDropdown.Item href="Feminino">Feminino</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#novidades">
                    Novidades
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#sobrenos" style={{color:'white'}}>Sobre nós</Nav.Link>
                <Nav.Link href="#entrar" style={{color:'white'}}>Entrar</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Pesquisa por nome"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-secondary">Buscar</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Header;