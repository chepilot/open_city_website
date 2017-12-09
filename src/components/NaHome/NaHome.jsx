import React from 'react';
import './NaHome.css';
import {  Link} from 'react-router-dom';
import 'animate.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NaHome extends React.Component{
    componentDidMount() {
        document.getElementById('page-wrap').style.position = "absolute";
        document.getElementById('page-wrap').style.height = "100%";
        document.getElementById('page-wrap').style.width = "100%";
        // document.getElementById('na-home').style.visibility = "visible";
        // document.getElementById('na-home').style.opacity= "1";
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
            <div id="na-home">
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
                    <Slider {...settings} className="slide-show">
                        <div>
                            <img className="axon-image-1" src={require('../../content/nahome/interest.jpg')} />
                        </div>
                        <div>
                            <img className="axon-image-1" src={require('../../content/nahome/na.jpg')} />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default NaHome