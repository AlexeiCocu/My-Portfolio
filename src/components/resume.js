import React, { Component } from 'react'; 
import {Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Languages from './languages';



class Resume extends Component {
    render() {
        return(
            <div className="bb">
                <Grid>
                    <Cell col={4} style={{color:'white'}}>
                        <div style={{textAlign: 'center'}}>
                            <img className="avatarc"
                                src={require('./eu1.jpg')}
                                alt="avatar"
                                style={{height: '200px'}} 
                            />
                        </div>
                        <h2 style={{padding: '2em'}}>Alexei Cocu</h2>
                        <h4 style={{color:'grey', textAlign: 'center'}}>Junior Web Developer</h4>
                        <hr style={{borderTop:'3px solid #033fb2'}}/>
                        <p>I am an energetic, well-balanced and calm person with good communication
                            skills and ability to cope with a dynamic working environment. A team player,
                            people-oriented, loyal, organized and confident, always looking positively
                            without going extreme or panic. 
                        </p>
                        <hr style={{borderTop:'3px solid #033fb2'}}/>
                        <h5>Address</h5>
                        <p>Chisinau, Republic of Moldova</p>
                        <h5>Phone</h5>
                        <p>+737 78 199 188</p>
                        <h5>Email</h5>
                        <p>alexei.cocu@gmail.com</p>
                        
                        <hr style={{borderTop:'3px solid #033fb2'}}/>
                    </Cell>


                    <Cell className="resume-right-col" col={8}>
                        <div className="bgr1">
                            
                                    <h2>Experience</h2>

                                <Experience
                                    startYear='February 2019'
                                    endYear='present'
                                    jobName='Unemployed Junior Web Developer'
                                    jobDescription = 'Strengthening the knowledge gained from theory through practice. Practicyng HTML, CSS, JavaScrpt, bootstrap, node.js, React and SQL.'
                                />

                                <Experience
                                    startYear='October 2013'
                                    endYear='March 2018'
                                    jobName='Manager of Agriculture Projects'
                                    jobDescription = 'Prepared the annual activity plan, budget planning and forecasting. Supervised and coordinated the execution of all project activity. Drafted activity reports, performed tendencies analyses. Was in close cooperation with the accounting department.'
                                />

                                <Experience
                                    startYear='June 2011'
                                    endYear='September 2013'
                                    jobName='Research Analyst'
                                    jobDescription = 'Assisted to the professional staff recruitment for international customers(private companies and governmental institutions). Performed database management, data processing and monitoring. Provided daily support of consultants for effective handling of projects. Elaborated candidate’s draft assessment, proposals and other internal documents.'
                                />

                                <hr style={{borderTop:'3px solid #e22947'}}></hr>

        <                       h2>Education</h2>
                                <Education
                                    startYear ={2008}
                                    endYear ={2010}
                                    schoolName='State University of Moldova'
                                    schoolDescription='Master Degree of Business Management'
                                />
                                <Education
                                    startYear ={2005}
                                    endYear ={2008}
                                    schoolName='The Academey of Economic Studies of Moldova'
                                    schoolDescription='Bachelor Degree of Economic Studies'
                                />

                                <hr style={{borderTop:'3px solid #e22947'}}></hr>

                                <h2>Skills</h2>
                                <p style={{marginLeft:'10px'}}>My self-assessment</p>
                                
                                <Skills 
                                    skills='Html'
                                    progress ={80}
                                />
                                <Skills 
                                    skills='CSS'
                                    progress={60}
                                />
                                <Skills 
                                    skills='JavaScript'
                                    progress={50}
                                />
                                <Skills 
                                    skills='Bootstrap'
                                    progress={80}
                                />
                                <Skills 
                                    skills='React'
                                    progress={30}
                                />
                                <Skills 
                                    skills='SQL'
                                    progress={60}
                                />
                                <hr style={{borderTop:'3px solid #e22947'}}></hr>

                                <h2>Spoken languages</h2>

                                <Languages>
                                    
                                </Languages>

                                
                           
                        </div>
                        
                    

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;