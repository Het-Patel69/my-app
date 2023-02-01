import React from "react";

function Home(props) {
    return (
        <div className={`min-h-screen ${props.mode}`}>

            <div className="container">
                <div className="pt-4 mb-4">
                    <h4>About Me :</h4>
                    <p id="about_me">Hello! I'm Het Patel, I'm an intern at codding gujju and currently pursuing B.Tech from Silver Oak University, Ahmedabad. I'm a tech nerd so naturally I love to know and discuss about letest technologies used in smartphones and computers. I have a good knowledge of HTML, CSS and Java Script and I'm constatantly trying to improve and gain more knowledge.</p>
                </div>
                <div className="my-4">
                    <h4>Personal Information :</h4>
                    <div id="inner_about">
                        <div>
                            Full Name :
                            <div>
                                Het K. Patel
                            </div>
                        </div>
                        <div>
                            Mobile :
                            <div>
                                +91 9157233711
                            </div>
                        </div>
                        <div>
                            Email :
                            <div>
                                phet9429@gmail.com
                            </div>
                        </div>
                        <div>
                            Address :
                            <div>Vastral, Ahmedabad
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my4">
                    <h4>Projects :</h4>
                    <div id="projects">
                        <div>
                            <a href="https://het-memegenerator.netlify.app" target='_blank'>
                                Meme Generator
                            </a>
                        </div>
                        <div>
                            <a href="https://het-sneakerstore.netlify.app" target='_blank'>
                                Online Sneaker store
                            </a>
                        </div>
                        <div>
                            <a href="https://hpin3d.netlify.app" target='_blank'>
                                My first Three.js project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;