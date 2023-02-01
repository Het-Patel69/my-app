import { Link } from "react-router-dom";
import { Dropdown, Form, Button, FloatingLabel } from "react-bootstrap"
import PropTypes from 'prop-types'
function Footer(props) {
    return (
        <div className={`container-fluid bg-${props.mode} p-3 ${props.mode}`}>
            <div id="form">
                <Dropdown>
                    <div className={`d-flex justify-content-center`}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic"  className="justify-content-center">
                        Submit your details
                    </Dropdown.Toggle>
                    </div>

                    <Dropdown.Menu>
                        <Form className="p-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>More About Subject</Form.Label>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    className="mb-3"        
                                >
                                    <Form.Control as="textarea" style={{ height: '100px' }} placeholder="Leave a comment here" />
                                </FloatingLabel>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <footer className="">
                {/* <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to={'/education'} className="nav-link px-2 text-muted">Education</Link></li>
                    <li className="nav-item"><Link to={'/experience'} className="nav-link px-2 text-muted">Experience</Link></li>
                </ul> */}
                <div id="contact" className="d-flex flex-wrap justify-content-center">
                    <p className="mx-3">Phone : +91-9157233711</p>
                    <p className="mx-3"><a href="mailto:phet9429@gmail.com"> Email : phet9429@gmail.com</a></p>
                </div>
                <p className={`text-center ${props.mode}`}>© 2022 | Het Patel</p>
            </footer>
        </div>
    );
}

export default Footer;