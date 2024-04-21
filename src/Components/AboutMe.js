import React, { Component } from "react";

class AboutMe extends Component {
    render() {
        return (
            <div style={{ paddingTop: "80px" }} className="container">
                <div className="am-container">
                    <div className="am-column1">
                        <img
                            src="assets/images/abam.png"
                            width="100%"
                            height="auto"
                            alt="img"
                            className="am-img"
                        />
                    </div>
                    <div className="am-column2">
                        <div className="sub-title">I'm a <span className="typewriter">Software Engineer</span></div>
                        <div className="main-title">Aldous Benjamin A. Maranga</div>
                        <a href='' className="prof">Download Resume</a>
                    </div>
                </div>

                <div className="am-text-cont">
                    <div className="header am-header">About Me</div>
                    <div className="am-text">
                        My name is Aldous Benjamin A. Maranga, you can call me Aldous for short. I am
                        currently studying at Lithan Academy Singapore as a Software
                        Engineer. I enjoy solving problems on real-time and through coding
                        structures as well as understanding the meaning behind a certain
                        functionality.
                    </div>
                </div>

                <div className="edu-cont">
                    <div className="header" style={{ textAlign: 'center' }}>Education</div>
                    <div className="edu-container">
                        <div className="edu-column1">
                            <div>
                                <div className="header1 edu-degree">Applied Degree in Software Engineering</div>
                                <div className="edu-date">2022-Present</div>
                                <div className="edu-school">Lithan Academy</div>
                                <div className="edu-location">Singapore</div>
                            </div>

                            <div>
                                <div className="header1 edu-degree">Senior Highschool Degree</div>
                                <div className="edu-date">2020-2022</div>
                                <div className="edu-school">University of Cebu-METC</div>
                                <div className="edu-location">Cebu City, Philippines</div>
                            </div>
                        </div>

                        <div className="edu-column2">
                            <div>
                                <div className="header1 edu-degree">Bachelor of Science in Information Technology</div>
                                <div className="edu-date">2022-Present</div>
                                <div className="edu-school">University of Cebu-Banilad</div>
                                <div className="edu-location">Cebu City, Philippines</div>
                            </div>

                            <div>
                                <div className="header1 edu-degree">Junior Highschool Degree</div>
                                <div className="edu-date">2016-2020</div>
                                <div className="edu-school">Don Bosco Technical College </div>
                                <div className="edu-location">Cebu City, Philippines</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
