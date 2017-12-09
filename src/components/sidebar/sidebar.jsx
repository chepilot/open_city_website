import React from 'react'
import './sidebar.css'
import { Link} from 'react-router-dom'
import {slide as Menu } from 'react-burger-menu'


class Sidebar extends React.Component {
    showAboutus(){
        document.getElementById('about-us').style.visibility = 'hidden';
        document.getElementById('about-us').style.opacity = '0';
        document.getElementById('contact').style.visibility = 'hidden';
        document.getElementById('contact').style.opacity = '0';
        document.getElementById('about-us').style.visibility = 'visible';
        document.getElementById('about-us').style.opacity = '1';
    };

    showContact(){
        document.getElementById('about-us').style.visibility = 'hidden';
        document.getElementById('about-us').style.opacity = '0';
        document.getElementById('contact').style.visibility = 'hidden';
        document.getElementById('contact').style.opacity = '0';
        document.getElementById('contact').style.visibility = 'visible';
        document.getElementById('contact').style.opacity = '1';
    };

    mouseOut(){
        document.getElementById('about-us').style.visibility = 'hidden';
        document.getElementById('about-us').style.opacity = '0';
        document.getElementById('contact').style.visibility = 'hidden';
        document.getElementById('contact').style.opacity = '0';
    }

    render () {
        return (
            <Menu  crossButtonClassName={ "fa fa-times-circle-o fa-2x custom-button" } right id='push' width={'220px'}  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                <div className="sidebar-link" onClick={this.mouseOut}>
                    <Link  to='/'>Home</Link>
                </div>
                <div className="sidebar-link">
                    <a onClick={this.showContact} >Project Overview</a>
                </div>
                <div className="sidebar-link">
                    <a onClick={this.showAboutus} >Our Team</a>
                </div>
                <div className="sidebar-link" onClick={this.mouseOut}>
                    <Link    to='/imageindex'> Index</Link>
                </div>
            </Menu>
        );
    }
}

export default Sidebar
