import React from 'react';
import './home.css';
import videoURL from '../../content/home/opening.mp4';
import videoURL1 from '../../content/home/na2.mp4';
import videoURL2 from '../../content/home/na1.mp4';
import { Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

import 'animate.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends React.Component{
    componentDidMount() {
        document.getElementById('page-wrap').style.height = "100%";
        document.getElementById('page-wrap').style.width = "100%";
    }

    playVideo() {
        document.getElementById('entry-video').style.display = 'inline';
        document.getElementById('play').style.display = 'none';
        document.getElementById('intro-quote').style.display = 'none';
        let vid = document.getElementById("entry-video");
        vid.playbackRate = 1.5;

        this.refs.vidRef.play();
        document.getElementsByClassName('closevideo')[0].style.visibility='visible';
        document.getElementsByClassName('bm-burger-button')[0].style.visibility = 'hidden'
    }

    playVideo1() {
        document.getElementById('entry-video-1').style.visibility = 'visible';
        document.getElementById('entry-video-1').style.opacity = '1';
        document.getElementById('home').style.visibility = 'hidden';
        document.getElementById('home').style.opacity = '0';
        let vid = document.getElementById("entry-video-1");
        vid.playbackRate = 1.5;
        this.refs.vidRef1.play();
        document.getElementsByClassName('closevideo1')[0].style.visibility='visible';
        document.getElementsByClassName('bm-burger-button')[0].style.visibility = 'hidden'
    }

    playVideo2() {
        document.getElementById('entry-video-1').style.display = 'none';
        document.getElementsByClassName('continue')[0].style.visibility='hidden';
        document.getElementsByClassName('continue')[0].style.opacity='0';
        document.getElementsByClassName('closevideo1')[0].style.visibility='hidden';
        document.getElementById('entry-video-2').style.opacity='1';
        document.getElementById('entry-video-2').style.visibility='visible';
        document.getElementsByClassName('closevideo2')[0].style.visibility='visible';
        let vid = document.getElementById("entry-video-2");
        vid.playbackRate = 1.5;

        this.refs.vidRef2.play();
        document.getElementsByClassName('closevideo2')[0].style.visibility='visible';
        document.getElementsByClassName('bm-burger-button')[0].style.visibility = 'hidden'
    }

    hideVideo(){
        document.getElementById('entry-video').style.display = 'none';
        document.getElementById('project').style.visibility = 'visible';
        document.getElementById('project').style.opacity = '1';
        document.getElementsByClassName('closevideo')[0].style.visibility='hidden';
        document.getElementsByClassName('bm-burger-button')[0].style.visibility = 'visible'
    }

    closeVideo1(){
        document.getElementsByClassName('closevideo1')[0].style.visibility='hidden';
        document.getElementsByClassName('continue')[0].style.visibility='visible';
        document.getElementsByClassName('bm-burger-button')[0].style.opacity = 'visible';
        document.getElementById('entry-video-1').currentTime = 17;
        document.getElementById('entry-video-1').pause();
    }

    closeVideo2(){
        document.getElementById('entry-video-2').currentTime = 17;
        document.getElementById('entry-video-2').pause();
        document.getElementById('entry-video-2').style.visibility = 'hidden';
        document.getElementById('entry-video-2').style.opacity = '0';
        document.getElementsByClassName('closevideo2')[0].style.visibility='hidden';
        document.getElementsByClassName('bm-burger-button')[0].style.visibility = 'visible';
        document.getElementById('home').style.display = 'none';
        document.getElementById('na-home-1').style.opacity = '1';
        document.getElementById('na-home-1').style.visibility = 'visible';
    }

    showInfo(){
        document.getElementById('age-info').style.visibility = 'visible';
        document.getElementById('age-info').style.opacity = '1';
        document.getElementById('general-info').style.visibility = 'hidden';
        document.getElementById('general-info').style.opacity = '0';
        document.getElementById('general-info').style.display= 'none';
        var a = document.getElementsByClassName('axon-button1-img');
        for(var i = 0; i < a.length; i++){
            a[i].style.opacity = '0.5'
        }
    }

    hideInfo(){
        document.getElementById('age-info').style.visibility = 'hidden';
        document.getElementById('age-info').style.opacity = '0';
        document.getElementById('general-info').style.visibility = 'visible';
        document.getElementById('general-info').style.opacity = '1';
        document.getElementById('general-info').style.display= 'block';

        var a = document.getElementsByClassName('axon-button1-img');
        for(var i = 0; i < a.length; i++){
            a[i].style.opacity = '1'
        }
    }

    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
        };

        return(
            <div className="home">
                <div id="home">
                    <div id="project">
                        <Link   to='/'>
                            <img className="inline-image" src={require('../../content/home/icon.png')} />
                        </Link>

                        <div id="project-menu">
                            <div id="project-info">
                                <div id="general-info">
                                    <p>
                                        Open the City is an interactive mapping project, pairing the narrative of Teju Cole’s novel <i>Open City</i> with the history of Manhattan. The book explores New York through the eyes of Julius, a Nigerian doctor in residency at Columbia University. You will see the city through the lens of the palimpsest– a document erased and written over many times, that reveals traces of its earlier versions. By overlaying layers of New York’s history onto Cole’s book, Open the City blends the world of his protagonist with traces of the island’s past.
                                        <br/><br/>
                                        You will explore four historic periods: pre-colonial Manhattan, Dutch New Amsterdam, New York's Civil War draft riots, and the 9/11 terrorist attacks. In particular, Open the City examines the impact of colonization, race and trauma on the city.
                                        <br/><br/>
                                        Start by clicking the historic maps to your right to explore Julius’ world. Remember, you can always click the logo at the top left of the page to return home and start exploring another map.
                                    </p>
                                </div>
                                <div id="age-info">
                                    <h6 className="period-title"> New Amsterdam</h6>
                                    <p>
                                        It was the first comprehensive study of Cornelis Van
                                        Tienhoven... He had arrived in 1633, as a secretary
                                        for the Dutch East India Company, but as he
                                        climbed up the social ladder, he became known for
                                        his many brutal acts, notable among them a raid
                                        he led to murder Canarsie Indians on Long Island,
                                        after which he had brought back the victims’ heads
                                        on pikes... [The book] was full of violent events,
                                        and in the endnotes were reprinted the relevant
                                        seventeenth-century records. These were written in
                                        calm and pious language that presented mass murder
                                        as little more than the regrettable side effect of
                                        colonizing the land. (p25-26)
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div id="project-main">
                            <a className="axon-button1" id="a" x="Coming Soon">
                                <div className="year-mark">2017<span>..........................................................</span></div>
                                <img className="axon-image axon-button1-img" src={require('../../content/home/1.png')} alt="" />
                            </a>
                            <a className="axon-button1" id="b" x="Coming Soon">
                                <div className="year-mark">2001<span>..........................................................</span></div>
                                <img className="axon-image axon-button1-img" src={require('../../content/home/2.png')} alt="" />
                            </a>
                            <a className="axon-button1" id="c" x="Coming Soon">
                                <div className="year-mark">1863<span>..........................................................</span></div>
                                <img className="axon-image axon-button1-img" src={require('../../content/home/3.png')} alt="" />
                            </a>
                            <div className="axon-button" id="d">
                                <div className="year-mark">1664 <span>..........................................................</span></div>
                                {/*<Link id="home" className="" to='/NaHome'>*/}
                                    <a x="Enter New Amsterdam" onClick={this.playVideo1.bind(this)}>
                                    <img className="axon-image"
                                         onMouseOver={this.showInfo}
                                         onMouseOut={this.hideInfo}
                                         src={require('../../content/home/4.png')}
                                         alt="" />
                                    </a>
                                {/*</Link>*/}
                            </div>
                            <a className="axon-button1" id="e" x="Coming Soon">
                                <div className="year-mark">1609<span>..........................................................</span></div>
                                <img className="axon-image axon-button1-img" src={require('../../content/home/5.png')} alt=""/>
                            </a>
                        </div>
                    </div>


                    <Play playVideo={this.playVideo.bind(this)} />
                    <p id="intro-quote">
                        The site was a palimpsest, as was all the city, written, erased,
                        rewritten. There had been communities here before Columbus ever
                        set sail, before Verrazano anchored his ships in the narrows, or
                        the black Portuguese slave trader Esteban Gómez sailed up the
                        Hudson; human beings had lived here, built homes, and quarreled
                        with their neighbors long before the Dutch ever saw a business
                        opportunity in the rich furs and timber of the island and its calm
                        bay. Generations rushed through the eye of the needle, and I, one
                        of the still legible crowd, entered the subway. I wanted to find the
                        line that connected me to my own part in these stories. <sup>1</sup>
                        <br/><br/>
                        <p className="footnote">
                            <sup>1</sup>
                            Cole, Teju. <i>Open City: A Novel </i>(pp. 58-59). Random House Publishing Group. Kindle Edition.
                        </p>
                        <div id="start-button">
                            <a  onClick={this.playVideo.bind(this)}> Let's get started >></a>
                        </div>
                        </p>


                </div>
                <a className="closevideo" onClick={this.hideVideo.bind(this)}>
                    Skip Intro
                </a>

                <a className="closevideo1" onClick={this.closeVideo1.bind(this)}>
                    Skip Video
                </a>

                <a className="closevideo2" onClick={this.closeVideo2.bind(this)}>
                    Skip Video
                </a>
                <a className="continue" onClick={this.playVideo2.bind(this)}>
                    Continue
                </a>

                <video id="entry-video" ref="vidRef"
                       src={videoURL} type="video/mp4"
                       onEnded={this.hideVideo.bind(this)} >
                </video>
                <video id="entry-video-1" ref="vidRef1"
                       src={videoURL1} type="video/mp4"
                       onEnded={this.closeVideo1.bind(this)} >
                </video>
                <video id="entry-video-2" ref="vidRef2"
                       src={videoURL2} type="video/mp4"
                       onEnded={this.closeVideo2.bind(this)} >
                </video>


                <div id="na-home-1">
                    <Link   to='/'>
                        <img className="inline-image" src={require('../../content/nahome/icon.png')} />
                    </Link>
                    <div className="na-menu">
                        <div id="na-info">
                            <br />
                            <p>
                                New Amsterdam was founded by the Dutch West India Company in 1624, creating the first permanent settlement on Manhattan’s southernmost tip. Established as a private, for-profit enterprise, the colony was intended to link the coastline with the lucrative fur trade further up the Hudson River.
                                <br/><br/>
                                New Amsterdam was known as a diverse and religiously tolerant community. With over eighteen languages spoken in the settlement, only half of the colonists were actually Dutch– the residents included a wide mix of Europeans, Africans, South Americans, and Indo-Carribeans.  The colony existed until 1664, when a British fleet captured the city in a bloodless invasion and renamed it New York. At the time, the settlement had a population of  8,000.
                                <br/><br/>
                                Click on the link below to start exploring the sites of New Amsterdam. When you're finished, click the logo on the top left of the page to return home.
                            </p>
                            <Link to='/maps'>
                                <a className="na-link"> Explore >></a>
                            </Link>
                        </div>
                    </div>
                    <div className="na-main">
                        <Slider {...settings} className="slide-show1">
                                <img className="fixed-image" src={require('../../content/nahome/interest.jpg')} />
                                <img className="fixed-image" src={require('../../content/nahome/na.jpg')} />
                        </Slider>
                    </div>
                </div>

            </div>
        );
    }
}

// video play button
class Play extends React.Component {
    render(){
        return(
            <div>
                <div onClick={this.props.playVideo}>
                    <img id='play' src={require('../../content/home/icon.png')} />
                </div>
            </div>
        );
    }
}



export default Home
