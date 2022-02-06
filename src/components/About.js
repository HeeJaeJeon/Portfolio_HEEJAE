import React from "react";
import PlaceHolder from "../Placeholder.png"

const About = () => {
    return (
        <div className="About-wrapper border-bottom">
            <div className="About-info">
                <h1 className='AboutHeader'>About HEEJAE</h1>
                <img className="profilePicture featurette-image img-fluid mx-auto" role="img" aria-label="placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" src={PlaceHolder} alt="Placeholder"></img>
                <div className="row featurette about-contents">
                    <div className="col-md-5">
                        <h2>Expertise</h2>
                    </div>
                    <div className="col-md-7">
                        <p className="lead">HEEJAE is a serveice/interaction designer currently based in South Korea who has great empathy and solid understanding of digital experience. He has been uncovering insights by conducting client/customer immersion activities such as observational studies, workshops, user interviews and user testings. He is also translating unveiled insights to design concepts on wireframes and mock-ups. He is eager to learn as well as attentive to details.</p>
                    </div>
                </div>
                <div className="row featurette about-contents">
                    <div className="col-md-5">
                        <h2>Experiences</h2>
                    </div>
                    <div className="col-md-7">
                        <p>His experience shows that he is a cross-functional and multicultural professional by performing as a Service designer as well as a Project manager. Also, He has been collaborating with many foreign colleagues in different countries(from US, Europe and Asia). His early experience in the hospitality industry with international brands has sharpened his ability to approach user experience design with great empathy.</p>
                        <ul className="experienceList">
                            <li>
                                <dl>
                                    <dt>Service Designer, Project Manager</dt>
                                    <dd>Favorte Medium, S.Korea (Nov 2020 - Present)</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>Service/Product Designer</dt>
                                    <dd>UX Booost, Remote (Apr 2020 - Nov 2020)</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>Executive, Order Management</dt>
                                    <dd>Becton Dickinson, Singapore (Jan 2018 - Oct 2019)</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>Senior Room Division Executive</dt>
                                    <dd>Sheraton Towers Singapore, Singapore (Jul 2016 - Jan 2018)</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>Front Desk Clerk</dt>
                                    <dd>Lotte Hotel Seoul, S.Korea (Jun 2014 - Nov 2015)</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row featurette about-contents">
                    <div className="col-md-5">
                        <h2>Tools</h2>
                    </div>
                    <div className="col-md-7">
                        <h3>Design</h3>
                        <p>Figma, Sketch, XD, Illustrator, Photoshop, Indesign, Aftereffects, Miro, Whimsical</p>
                        <h3>Development</h3>
                        <p>HTML, CSS, Javascript, jQuery, ReactJS, NodeJs, VS Code, Atom, Git & Github, Postman, MongoDB</p>
                        <h3>Project Management</h3>
                        <p>JIRA, Monday, Trello, PARABOL, Google suites</p>
                    </div>
                </div>
                <div className="row featurette about-contents-certificates">
                    <div className="certHeader col-md-5">
                        <h2>Certificates</h2>
                    </div>
                    <div className="certsList col-md-7">
                        <ul>
                            <li>
                                <dl>
                                    <dt>Survey Analyst, Junior</dt>
                                    <dd>Human Resource Development Service of Korea (Aug 2014)</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>Nielson Norman Group UX Certificate</dt>
                                    <dd>Nielson Norman Group (Jul 2019)</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>User Experience Design Certificate</dt>
                                    <dd>General Assembly, Singpaore (Feb 2020)</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>Practical Project Management</dt>
                                    <dd>Taught by William Stewart PhD, PMP (Jun 2021)</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>Web Full-stack Development Bootcamp</dt>
                                    <dd>Taught by Dr. Angela Yu (Dec 2021)</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
