import React from "react";
import PropTypes from 'prop-types'
import { Card } from "react-bootstrap"
import python_cert from "../certificates/python.jpg"
import java_cert from "../certificates/java.jpg"
import linux_cert from "../certificates/linux.jpg"
import codejam_cert from "../certificates/codejam.jpg"




function Experience(props) {
    return (
        <React.Fragment>
            <div>
                <div className='min-h-screen container-fluid'>
                    <div className='card my-3'>
                        <div className="card-body">
                            <h5 className="card-title fw-bold pb-3">Technical Skills</h5>
                            <div className="row">
                                <div className="col-md-6 my-3">
                                    <p className="mb-0">HTML</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "93%" }}>93%</div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-3">
                                    <p className="mb-0">CSS</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "88%" }} >88%</div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-3">
                                    <p>LARAVEL</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "34%" }}>34%</div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-3">
                                    <p className="mb-0">REACTJS</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "40%" }} >40%</div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-3">
                                    <p className="mb-0">Python</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "69%" }} >69%</div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-3">
                                    <p className="mb-0">Java</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "54%" }} >54%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card my-3">
                        <div className="card-body">
                            <h5 className="card-title fw-bold pb-3">Soft Skills</h5>
                            <div id="soft_skills" className="container-fluid d-flex flex-wrap">
                                <div className="m-2">
                                    Problem Solving : Solved over 80 Problems on <a href="https://dmoj.ca/user/Het" target="_blank">DMOJ</a> with
                                    global rank under 4500
                                </div>
                                <div className="m-2">
                                    Work Ethic
                                </div>
                                <div className="m-2">
                                    Quick Learner
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4>Certificates :</h4>
                    <div id="cert" className="d-flex flex-wrap">
                        <Card className="m-3" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={python_cert} />
                            <Card.Body>
                                {/* <Card.Title>Card Title</Card.Title> */}
                                <Card.Text>
                                    Certificate for Completion of Python 3.4.3 Training by Spoken Tutorial Project at IIT Bombay
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="m-3" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={java_cert} />
                            <Card.Body>
                                {/* <Card.Title>Card Title</Card.Title> */}
                                <Card.Text>
                                    Certificate for Completion of Java Training by Spoken Tutorial
                                    Project
                                    at
                                    IIT Bombay
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="m-3" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={linux_cert} />
                            <Card.Body>
                                {/* <Card.Title>Card Title</Card.Title> */}
                                <Card.Text>
                                    Certificate for Completion of
                                    Linux Training by Spoken Tutorial Project at IIT Bombay
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="m-3" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={codejam_cert} />
                            <Card.Body>
                                {/* <Card.Title>Card Title</Card.Title> */}
                                <Card.Text>
                                    Certificate for for progressing to Round 1 of Code Jam 2022
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Experience;