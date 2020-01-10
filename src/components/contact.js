import React, { Component } from 'react'; 
import { Grid, Cell } from 'react-mdl';
import { List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Alexei Cocu</h2>
                        <img 
                            src={require('./eu1.jpg')}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        {/*<p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>*/}
                    </Cell>
                    <Cell col={6}>
                        <h2>My Contacts</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Oxygen', color:'white'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +373 78 199 188
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Oxygen', color:'white'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        alexei.cocu@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Oxygen', color:'white'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        alexei.cocu
                                    </ListItemContent>
                                 </ListItem>

                                 <hr/>
                                
                                <ListItem>
                                    <ListItemContent>
                                                {/* LinkedIn*/}
                                        <a href="https://www.linkedin.com/in/alexei-cocu-004b50184/" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-linkedin-square"  aria-hidden="true" style={{color:'white'}}/>
                                        </a>
                                    </ListItemContent>
                                </ListItem>
                                 

                                <ListItem>
                                    <ListItemContent>
                                                        {/* GitHub*/}
                                        <a href="https://github.com/AlexeiCocu" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-github-square"  aria-hidden="true"  style={{color:'white'}}/>
                                        </a>
                                    </ListItemContent>
                                </ListItem>
                                
                                
                            </List>
                        </div>
                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;