import React from 'react'
import "./Footer.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/christroy?tab=repositories" target="_blank"><GitHubIcon/></a>
            <a href="" target="_blank"><LinkedInIcon/></a>
        </div>
    )
}

export default Footer
