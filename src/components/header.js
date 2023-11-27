import {Container, Nav, Navbar, NavbarCollapse, NavLink} from "react-bootstrap";


export default function Header() {

    return (<Navbar variant={'dark'} bg={'dark'} expand={'lg'} collapseOnSelect sticky={'top'} fixed={'top'}>
        <Container fluid >
            <Navbar.Brand>WILLOW WEAVE</Navbar.Brand>
            <Navbar.Toggle aria-controls={'basic-navbar-nav'}/>
            <NavbarCollapse id={'basic-navbar-nav'} className={'ms-auto'}>
                <Nav className={'justify-content-around ms-auto'}>
                    <NavLink>More</NavLink>
                </Nav>
            </NavbarCollapse>
        </Container>
    </Navbar>)
}