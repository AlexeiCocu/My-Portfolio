import React, { Component } from 'react'; 
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div className="land">
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src={require('./eu2.png')}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className = "banner-text">
                            <h1>Junior Web Developer</h1>
                            <hr/>
                            <p>
                                HTML | CSS | Bootstrap | JavaScript | React | SQL
                            </p>
                            
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Landing;