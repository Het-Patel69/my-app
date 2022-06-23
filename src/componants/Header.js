import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo from '../image/logo.jpg';
import avtar from "../image/self.jpeg";
import insta from "../Icons/instagram.png"
import twitter from "../Icons/twitter.png"
import reddit from "../Icons/reddit.png"
import github from "../Icons/github.png"

function Header() {
    return (
        <div>
            {/* <div id="darkmode">
                <form>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Dark-Mode"
                        onClick={changemode}
                    />
                </form>
            </div> */}
            <div className="pt-5 d-flex flex-column align-items-center">
                <img id="self_img" src={avtar} width={175} alt="Het Patel" />
                <h2 className="pt-3">Hello, There!</h2>
                <h5 className="text-center border-bottom pb-3">I'm Het Patel</h5>
                <p>Web Developer</p>
                <p>I design and build User Interfaces</p>
                {/* </div>
            <div> */}
                {/* <a className="m-auto" href="#menu">
                    <img src={arrow} alt="Go to" />
                </a> */}
                <div id="icons">
                    <div id="icon_page" className="my-3">
                        <a href="https://instagram.com/patelhet_7" target="_blank"><img src={insta} alt="" /></a>
                        <a href="https://twitter.com/Patelhet_7" target="_blank"><img src={twitter} alt="" /></a>
                        <a href="https://reddit.com" target="_blank"><img src={reddit} alt="" /></a>
                        <a href="https://github.com/Het-Patel69" target="_blank"><img src={github} alt="" /></a>
                    </div>
                </div>

                <a href="#menu">
                    <div id="arrow">
                        <p></p>
                    </div>
                </a>
            </div>
            <div className="navbarC m-4">
                <Navbar id="menu" bg="light">
                    {/* <Container> */}
                    {/* <Navbar.Brand as={Link} to={'/'} className='ms-2'>
                    <img src={logo} width={25} alt="logo" />Het Patel
                </Navbar.Brand> */}
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="m-auto d-flex flex-wrap justify-content-center">
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        {/* <Nav.Link as={Link} to={'/About'}>About</Nav.Link> */}
                        <Nav.Link as={Link} to={'/Skills'}>Skills</Nav.Link>
                        <Nav.Link as={Link} to={'/education'}>Education</Nav.Link>
                        <Nav.Link as={Link} to={'/experience'}>Experience</Nav.Link>
                        <a href="#contact">Contact Me</a>
                    </Nav>
                    {/* </Navbar.Collapse> */}
                    {/* </Container> */}
                </Navbar>
            </div>
        </div>
    );
}

export default Header;