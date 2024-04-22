import { Container, Nav, Navbar, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import Link from 'next/link';

export default function Navigation() {
  return (
    <Navbar expand="lg" className='mt-3'>
      <Container>
        <NavbarBrand href="/">
          <div className='d-lg-none purple fs-1'>FeminizidMap.org</div>
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="justify-content-between text-center w-100">
            <Link className="nav-link fs-2" href="/">HOME</Link>
            <Link className="nav-link fs-2" href="/about">ABOUT</Link>
            <Link className="nav-link fs-2" href="/map">MAP</Link>
            <Link className="nav-link fs-2" href="/database">DATABASE</Link>
            <Link className="nav-link fs-2" href="/">REPORTS</Link>
            <Link className="nav-link fs-2" href="/">TEAM</Link>
            <Link className="nav-link fs-2" href="/">FAQ</Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};
