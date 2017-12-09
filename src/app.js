import React from 'react';
import './index.css'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/home/home'
import NaHome from './components/NaHome/NaHome'
import Julius from './components/julius/julius'
import IndexPage from './components/indexPage/indexPage'
import { CSSTransitionGroup } from 'react-transition-group'
import 'animate.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link} from 'react-router-dom'

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

class App extends React.Component {
    mouseOut(){
        document.getElementById('about-us').style.visibility = 'hidden';
        document.getElementById('about-us').style.opacity = '0';
        document.getElementById('contact').style.visibility = 'hidden';
        document.getElementById('contact').style.opacity = '0';
    }
    render() {
        return (
            <Router  basename={process.env.PUBLIC_URL}>
                <div id="outer-container">
                    <Sidebar/>
                    <main id ="page-wrap" >

                        <div id="about-us">
                            <Link   to='/'>
                                <img className="inline-image" src={require('./content/home/icon.png')} />
                            </Link>

                            <div className="text-area">
                                <p className="info1">
                                    <i className="fa fa-times-circle-o fa-2x closeInfo" aria-hidden="true"
                                       onClick={this.mouseOut}></i>
                                    <h4>About Us</h4>
                                    <br />
                                    <br />

                                    <p>
                                        Open the City is the product of a multi-disciplinary team of designers and academics from Harvard and Yale University. Applying data visualization techniques to humanities research, we focus on interactivity to create engaging experiences for our users. Our goal is to create a work that appeals to members of both the academy and general public.

                                        Led by Amanda Chemeche, this spring our team received a grant from Yale University’s Digital Humanities Department to digitize a 250-page literary mapping project. The document charts the narrative of Teju Cole’s 2011 novel, <i>Open City</i>, following the book's protagonist Julius. Through maps and archival data, the project overlays New York’s history onto Cole’s original work. The project particularly focuses on Julius’ exploration of the impact of colonization, race, and trauma on the city.
                                        <br/><br/>
                                        After reading about our team, go back to the homepage and start exploring Julius’s New York.
                                    </p>
                                    <br />
                                    <h5>Amanda Chemeche, Team Leader</h5>
                                    <p>
                                        Amanda is a dual-masters graduate student at Yale University, studying both East Asian and American Studies. Her work integrates ethnographic research with digital and visual methods of representation. As a researcher and filmmaker, Amanda’s previous work focuses on marginalized communities in different contexts, be they in Amish Pennsylvania, or displaced artists in New York’s Chelsea Hotel. Before coming to Yale, Amanda spent several years working in fine art at both the Guggenheim and Peggy Guggenheim Museums. She holds a dual degree in art history and political science.
                                    </p>
                                    <br />
                                    <h5>Jonathan Andrews, Designer</h5>
                                    <p>
                                        Jonathan is a landscape architecture master’s candidate, studying at the Harvard Graduate School of Design. With a background in literature and sociology, Jonathan has a deep appreciation for the relationship between the tools of design and more traditional forms of academic research. In his work, he utilizes mapping as a means to understand the layers of meaning embedded in texts and data.
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div id="contact">
                            <Link   to='/'>
                                <img className="inline-image" src={require('./content/home/icon.png')} />
                            </Link>
                            <i className="fa fa-times-circle-o fa-2x closeInfo" aria-hidden="true"
                               onClick={this.mouseOut}></i>
                            <div className="text-area1">
                                <p className="info1">

                                    <h4>Project Overview</h4>
                                    <br />
                                    <br />
                                    <p className="text-box">
                                        Welcome to Open the City– an interactive mapping project that explores Teju Cole's 2011 novel <i>Open City</i> through the use of maps, artifacts and photographs. A book that explores New York's history, it is told from the perspective of Julius, a Nigerian doctor in residency at Columbia University.
                                        <br/><br/>
                                        The book is modeled on the palimpsest– a document erased and written over many times, that reveals traces of its earlier versions. By stacking layers of information, Cole investigates the interaction of history and experience, weaving Julius’ observations of Manhattan with reflections on the island’s past.
                                        <br/><br/>
                                        Following this model, Open the City overlays New York’s history onto Cole’s novel.
                                        It maps out the city across four historic periods: pre-colonial Manhattan,
                                        Dutch New Amsterdam, New York's Civil War draft riots, and the 9/11 terrorist attacks.
                                        The project focuses particularly on the impact of colonization, race, and trauma. Open
                                        the City blends visualization with archival research, connecting each site to a series of
                                        related images and artifacts. In this way, the project hopes to integrate spatial, historic,
                                        and literary data into a unified narrative.
                                        <br/><br/>
                                    </p>
                                    <img  className="axon-box" src={require('./content/full.png')} />
                                </p>
                            </div>
                        </div>

                        <div id="julius"></div>

                        <Route render={({ location }) => (
                                <CSSTransitionGroup
                                    transitionName="fade"
                                    >
                                    <Switch key={location.key} location={location}>
                                        <Route exact path="/" component={Home} location={location} key={location.key} />
                                        <Route exact path="/NaHome" component={NaHome} location={location} key={location.key} />
                                        <Route exact path="/maps" component={Julius} location={location} key={location.key} />
                                        <Route exact path="/imageindex" component={IndexPage} location={location} key={location.key} />
                                    </Switch>
                                </CSSTransitionGroup>
                            )}/>
                    </main>
                </div>
            </Router>
        )
    }
}


export default App