import React from 'react';

const Footer = (props) => {
    return(
        <React.Fragment>
            <hr/>
            <center>
                <small>&copy; Dream Works By Sunitta {props.month} {props.year}</small>
            </center>
        </React.Fragment>
    )
}

export default Footer;