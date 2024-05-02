import React, { Component } from "react";

class AboutMe extends Component {
    render() {
        return (
            <div style={{ paddingTop: '80px' }} className="container">
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
                        <a href='https://drive.google.com/file/d/1DLFLAo5_wBW-zkdvw0-SVlSWCzB1EOsi/view?usp=sharing' target="_blank" rel="noreferrer" className="prof">Download Resume</a>
                    </div>
                </div>

                <div className="about-cont">
                    <div className="am-text-cont">
                        <div className="header am-header">About Me</div>
                        <div className="am-text">
                            Hi! You can call me Aldous. I am a Software
                            Egineer student at Lithan Academy Singapore. I enjoy solving problems on real-time and through coding
                            structures as well as understanding the meaning behind a certain
                            functionality.
                        </div>
                    </div>
                    <img src="assets/images/abam1.png" alt="img" className="am-img1" />
                </div>


                <div className="exp-cont">
                    <img src="assets/images/work.svg" alt="img" className="work-img" />
                    <div>
                        <div className="header">Work Experience</div>
                        <div className="">
                            <div className="header1">Frontend Intern</div>
                            <button className="edu-date">Dec 2023-March 2024</button>
                            <div style={{fontWeight: 'bold'}}>Xceler Ai</div>
                            <div>Hong Leong Building, 16 Raffles Quay, Singapore</div>
                        </div>
                    </div>

                </div>

                <div className="edu-cont">
                    <div className="header" style={{ textAlign: 'center' }}>Education</div>
                    <div className="edu-container">
                        <div className="edu-column1">
                            <div style={{ paddingBottom: '30px' }}>
                                <div className="header1">Applied Degree in Software</div>
                                <div className="header1">Engineering</div>
                                <button className="edu-date">2022-Present</button>
                                <div className="edu-school">Lithan Academy</div>
                                <div className="edu-location">Singapore</div>
                            </div>

                            <div>
                                <div className="header1 edu-degree">Senior Highschool Degree</div>
                                <button className="edu-date">2020-2022</button>
                                <div className="edu-school">University of Cebu-METC</div>
                                <div className="edu-location">Cebu City, Philippines</div>
                            </div>
                        </div>

                        <div className="edu-column2">
                            <div style={{ paddingBottom: '30px' }}>
                                <div className="header1">Bachelor of Science in</div>
                                <div className="header1">Information Technology</div>
                                <button className="edu-date">2022-Present</button>
                                <div className="edu-school">University of Cebu-Banilad</div>
                                <div className="edu-location">Cebu City, Philippines</div>
                            </div>

                            <div>
                                <div className="header1 edu-degree">Junior Highschool Degree</div>
                                <button className="edu-date">2016-2020</button>
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
