import React, {Component} from 'react';
import {List, ListItem} from 'react-mdl'; 

class Languages extends Component {
    render() {
        return(
            <List>
                <ListItem>Romanian (native)</ListItem>
                <ListItem>English (above average)</ListItem>
                <ListItem>Russian (above average)</ListItem>
            </List>
        )
    }
}

export default Languages;