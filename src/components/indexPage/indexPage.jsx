import React from 'react';
import './indexPage.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { Link} from 'react-router-dom'

class IndexPage extends React.Component{
    componentDidMount() {
        document.getElementById('page-wrap').style.position = "absolute";
        document.getElementById('page-wrap').style.height = "100%";
        document.getElementById('page-wrap').style.width = "100%";
    }

    showImage(id,id1){
        for(var i = 0; i < document.getElementsByClassName('location-image').length; i++){
            document.getElementsByClassName('location-image')[i].style.visibility ='hidden';
            document.getElementsByClassName('location-image')[i].style.opacity ='0';
        }
        document.getElementById(id+'-image-'+id1).style.visibility = 'visible';
        document.getElementById(id+'-image-'+id1).style.opacity = '1';
        document.getElementsByClassName('closee')[0].style.display = "block"

    }

    hdieImage(){
        for(var i = 0; i < document.getElementsByClassName('location-image').length; i++){
            document.getElementsByClassName('location-image')[i].style.visibility ='hidden';
            document.getElementsByClassName('location-image')[i].style.opacity ='0';
        }
        document.getElementsByClassName('closee')[0].style.display = "none"
    }

    render(){
        const imagesSite = [
            {
                original: require('../../content/julius/site/NA_00_01.jpg'),
                thumbnail:require('../../content/julius/site/NA_00_01.jpg'),
            },
            {
                original:        require('../../content/julius/site/NA_00_02.jpg'),
                thumbnail:       require('../../content/julius/site/NA_00_02.jpg')
            },
            {
                original:        require('../../content/julius/site/NA_00_03.jpg'),
                thumbnail:       require('../../content/julius/site/NA_00_03.jpg')
            },
            {
                original:        require('../../content/julius/site/NA_00_04.gif'),
                thumbnail:       require('../../content/julius/site/NA_00_04.gif')
            },
            {
                original:        require('../../content/julius/site/NA_00_05.png'),
                thumbnail:       require('../../content/julius/site/NA_00_05.png')
            },
            {
                original:        require('../../content/julius/site/NA_00_06.png'),
                thumbnail:       require('../../content/julius/site/NA_00_06.png')
            },
        ]
        const imagesJ1 = [
            {
                original: require('../../content/julius/j1/NA_JU_01_01.jpg'),
                thumbnail:require('../../content/julius/j1/NA_JU_01_01.jpg'),
            },
            {
                original:        require('../../content/julius/j1/NA_JU_01_02.jpg'),
                thumbnail:       require('../../content/julius/j1/NA_JU_01_02.jpg')
            },
        ]
        const imagesJ2 = [
            {
                original:         require('../../content/julius/j2/NA_JU_02_01.png'),
                thumbnail:        require('../../content/julius/j2/NA_JU_02_01.png'),
            },
            {
                original:require('../../content/julius/j2/NA_JU_02_02.jpg'),
                thumbnail:require('../../content/julius/j2/NA_JU_02_02.jpg'),
            },
            {
                original:            require('../../content/julius/j2/NA_JU_02_03.jpg'),
                thumbnail:            require('../../content/julius/j2/NA_JU_02_03.jpg'),
            },
        ]
        const imagesJ3 = [
            {
                original:         require('../../content/julius/j3/NA_JU_03_01.jpg'),
                thumbnail:        require('../../content/julius/j3/NA_JU_03_01.jpg'),
            }
            ]
        const imagesJ4 = [
            {
                original:         require('../../content/julius/j4/NA_JU_04_01.jpg'),
                thumbnail:        require('../../content/julius/j4/NA_JU_04_01.jpg'),
            },
            {
                original:            require('../../content/julius/j4/NA_JU_04_02.jpg'),
                thumbnail:            require('../../content/julius/j4/NA_JU_04_02.jpg'),
            },
            {
                original: require('../../content/julius/j4/NA_JU_04_03.jpg'),
                thumbnail:require('../../content/julius/j4/NA_JU_04_03.jpg'),
            },
            {
                original:  require('../../content/julius/j4/NA_JU_04_04.jpg'),
                thumbnail: require('../../content/julius/j4/NA_JU_04_04.jpg'),
            },
            {
                original:    require('../../content/julius/j4/NA_JU_04_05.jpg'),
                thumbnail:   require('../../content/julius/j4/NA_JU_04_05.jpg'),
            },
        ]
        const imagesH1 = [
            {
                original: require('../../content/julius/h1/NA_01_01.jpg'),
                thumbnail:require('../../content/julius/h1/NA_01_01.jpg'),
            },
            {
                original: require('../../content/julius/h1/NA_01_02.jpg'),
                thumbnail:require('../../content/julius/h1/NA_01_02.jpg'),
            },
        ]
        const imagesH2 = [
            {
                original: require('../../content/julius/h2/NA_02_01.png'),
                thumbnail:require('../../content/julius/h2/NA_02_01.png'),
            },
        ]
        const imagesH3 = [
            {
                original: require('../../content/julius/h3/NA_03_01.jpg'),
                thumbnail:require('../../content/julius/h3/NA_03_01.jpg'),
            },
            {
                original: require('../../content/julius/h3/NA_03_02.png'),
                thumbnail:require('../../content/julius/h3/NA_03_02.png'),
            },
            {
                original: require('../../content/julius/h3/NA_03_03.gif'),
                thumbnail:require('../../content/julius/h3/NA_03_03.gif'),
            },
            {
                original: require('../../content/julius/h3/NA_03_04.jpg'),
                thumbnail:require('../../content/julius/h3/NA_03_04.jpg'),
            },
        ]
        const imagesH4 = [
            {
                original:        require('../../content/julius/h4/NA_04_01.jpg'),
                thumbnail:        require('../../content/julius/h4/NA_04_01.jpg'),
            },
            {
                original:        require('../../content/julius/h4/NA_04_02.jpg'),
                thumbnail:        require('../../content/julius/h4/NA_04_02.jpg'),
            },
            {
                original:        require('../../content/julius/h4/NA_04_03.jpg'),
                thumbnail:        require('../../content/julius/h4/NA_04_03.jpg'),
            },
            {
                original:        require('../../content/julius/h4/NA_04_04.png'),
                thumbnail:        require('../../content/julius/h4/NA_04_04.png'),
            },
            {
                original:        require('../../content/julius/h4/NA_04_05.png'),
                thumbnail:        require('../../content/julius/h4/NA_04_05.png'),
            },
            {
                original:        require('../../content/julius/h4/NA_04_06.png'),
                thumbnail:        require('../../content/julius/h4/NA_04_06.png'),
            },
            {
                original:        require('../../content/julius/h4/NA_04_07.png'),
                thumbnail:        require('../../content/julius/h4/NA_04_07.png'),
            },
            {
                original:        require('../../content/julius/h4/NA_04_08.png'),
                thumbnail:        require('../../content/julius/h4/NA_04_08.png'),
            },
            {
                original:        require('../../content/julius/h4/NA_04_09.png'),
                thumbnail:        require('../../content/julius/h4/NA_04_09.png'),
            },
            {
                original:        require('../../content/julius/h4/NA_04_10.jpg'),
                thumbnail:        require('../../content/julius/h4/NA_04_10.jpg'),
            },
        ]
        const imagesH5 = [
            {
                original: require('../../content/julius/h5/NA_05_01.png'),
                thumbnail:require('../../content/julius/h5/NA_05_01.png'),
            },
            {
                original:             require('../../content/julius/h5/NA_05_02.jpg'),
                thumbnail:            require('../../content/julius/h5/NA_05_02.jpg'),
            },
            {
                original: require('../../content/julius/h5/NA_05_03.jpg'),
                thumbnail:require('../../content/julius/h5/NA_05_03.jpg'),
            },
            {
                original: require('../../content/julius/h5/NA_05_04.jpg'),
                thumbnail:require('../../content/julius/h5/NA_05_04.jpg'),
            },
        ]
        const imagesH6 = [
            {
                original: require('../../content/julius/h6/NA_06_01.gif'),
                thumbnail:require('../../content/julius/h6/NA_06_01.gif'),
            },
            {
                original: require('../../content/julius/h6/NA_06_02.gif'),
                thumbnail:require('../../content/julius/h6/NA_06_02.gif'),
            },
            {
                original:   require('../../content/julius/h6/NA_06_03.jpg'),
                thumbnail:  require('../../content/julius/h6/NA_06_03.jpg'),
            },
        ]
        const imagesH7 = [
            {
                original: require('../../content/julius/h7/NA_07_01.jpg'),
                thumbnail:require('../../content/julius/h7/NA_07_01.jpg'),
            },
            {
                original: require('../../content/julius/h7/NA_07_02.jpg'),
                thumbnail:require('../../content/julius/h7/NA_07_02.jpg'),
            },
            {
                original: require('../../content/julius/h7/NA_07_03.jpg'),
                thumbnail:require('../../content/julius/h7/NA_07_03.jpg'),
            },
        ]
        const imagesH8 = [
            {
                original: require('../../content/julius/h8/NA_08_01.png'),
                thumbnail:require('../../content/julius/h8/NA_08_01.png'),
            },
            {
                original: require('../../content/julius/h8/NA_08_02.jpg'),
                thumbnail:require('../../content/julius/h8/NA_08_02.jpg'),
            },
            {
                original: require('../../content/julius/h8/NA_08_03.png'),
                thumbnail:require('../../content/julius/h8/NA_08_03.png'),
            },
            {
                original: require('../../content/julius/h8/NA_08_04.png'),
                thumbnail:require('../../content/julius/h8/NA_08_04.png'),
            },
            {
                original: require('../../content/julius/h8/NA_08_05.png'),
                thumbnail:require('../../content/julius/h8/NA_08_05.png'),
            },
            {
                original: require('../../content/julius/h8/NA_08_06.jpg'),
                thumbnail:require('../../content/julius/h8/NA_08_06.jpg'),
            },
            {
                original: require('../../content/julius/h8/NA_08_07.png'),
                thumbnail:require('../../content/julius/h8/NA_08_07.png'),
            },
            {
                original: require('../../content/julius/h8/NA_08_08.jpg'),
                thumbnail:require('../../content/julius/h8/NA_08_08.jpg'),
            },
            {
                original: require('../../content/julius/h8/NA_08_09.jpg'),
                thumbnail:require('../../content/julius/h8/NA_08_09.jpg'),
            },
            {
                original: require('../../content/julius/h8/NA_08_10.jpg'),
                thumbnail:require('../../content/julius/h8/NA_08_10.jpg'),
            },
            {
                original: require('../../content/julius/h8/NA_08_11.png'),
                thumbnail:require('../../content/julius/h8/NA_08_11.png'),
            },
        ]
        const imagesH9 = [
            {
                original: require('../../content/julius/h9/NA_09_01.jpg'),
                thumbnail:require('../../content/julius/h9/NA_09_01.jpg'),
            },
            {
                original:require('../../content/julius/h9/NA_09_02.png'),
                thumbnail:require('../../content/julius/h9/NA_09_02.png'),
            },
            {
                original: require('../../content/julius/h9/NA_09_03.png'),
                thumbnail:require('../../content/julius/h9/NA_09_03.png'),
            },
            {
                original: require('../../content/julius/h9/NA_09_04.jpg'),
                thumbnail:require('../../content/julius/h9/NA_09_04.jpg'),
            },
            {
                original: require('../../content/julius/h9/NA_09_05.jpg'),
                thumbnail:require('../../content/julius/h9/NA_09_05.jpg'),
            },
            {
                original: require('../../content/julius/h9/NA_09_06.jpg'),
                thumbnail:require('../../content/julius/h9/NA_09_06.jpg'),
            },
            {
                original: require('../../content/julius/h9/NA_09_07.jpg'),
                thumbnail:require('../../content/julius/h9/NA_09_07.jpg'),
            },
        ]


        return(
            <div id="index">
                <Link   to='/'>
                    <img className="inline-image" src={require('../../content/home/icon.png')} />
                </Link>
                <div className="index-main-true">
                    {/*SITE*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('site', '1')} src={require('../../content/icon/site.PNG')} />
                            <h5 className="location-link" id="j1" >New Amsterdam Overview</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image"  onClick={() => this.showImage('site','0')}   src={require('../../content/julius/site/NA_00_01.jpg')} />
                                </div>
                                <div className="image-container"  >
                                    <img className="index-image" onClick={() => this.showImage('site','1')} src={require('../../content/julius/site/NA_00_02.jpg')} />
                                </div>
                                <div className="image-container" >
                                    <img className="index-image"  onClick={() => this.showImage('site','2')} src={require('../../content/julius/site/NA_00_03.jpg')} />
                                </div>
                                <div className="image-container"  >
                                    <img className="index-image" onClick={() => this.showImage('site','3')} src={require('../../content/julius/site/NA_00_04.gif')} />
                                </div>
                                <div className="image-container"  >
                                    <img className="index-image" onClick={() => this.showImage('site','4')} src={require('../../content/julius/site/NA_00_05.png')} />
                                </div>
                                <div className="image-container"  >
                                    <img className="index-image" onClick={() => this.showImage('site','5')} src={require('../../content/julius/site/NA_00_06.png')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*J1*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('j1','0')} src={require('../../content/icon/j1.png')} />
                            <h5 className="location-link" id="j1" >Trinity Church</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j1','0')} src={require('../../content/julius/j1/NA_JU_01_01.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j1','1')} src={require('../../content/julius/j1/NA_JU_01_02.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*J2*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('j2','0')} src={require('../../content/icon/j2.png')} />
                            <h5 className="location-link" id="j1" >Bowling Green</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j2','0')} src={require('../../content/julius/j2/NA_JU_02_01.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j2','1')} src={require('../../content/julius/j2/NA_JU_02_02.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j2','2')} src={require('../../content/julius/j2/NA_JU_02_03.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*j3*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('j3','0')} src={require('../../content/icon/j3.png')} />
                            <h5 className="location-link" id="j1" >Customs House</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j3','0')} src={require('../../content/julius/j3/NA_JU_03_01.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*J4*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('j4','0')} src={require('../../content/icon/j4.png')} />
                            <h5 className="location-link" id="j1" >Cornelis Van Trenhoven</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j4','0')} src={require('../../content/julius/j4/NA_JU_04_01.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j4','1')} src={require('../../content/julius/j4/NA_JU_04_02.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j4','2')} src={require('../../content/julius/j4/NA_JU_04_03.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j4','3')} src={require('../../content/julius/j4/NA_JU_04_04.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('j4','4')} src={require('../../content/julius/j4/NA_JU_04_05.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*h1*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('h1','0')} src={require('../../content/icon/h1.png')} />
                            <h5 className="location-link" id="j1" >Wall St</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h1','0')} src={require('../../content/julius/h1/NA_01_01.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h1','1')}src={require('../../content/julius/h1/NA_01_02.jpg')} />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*H2*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('h2', '0')} src={require('../../content/icon/h2.png')} />
                            <h5 className="location-link" id="j1" >Broadway</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image"  onClick={() => this.showImage('h2', '0')} src={require('../../content/julius/h2/NA_02_01.png')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*H3*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('h3', '0')} src={require('../../content/icon/h3.png')} />
                            <h5 className="location-link" id="j1" >Fort Amsterdam</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h3', '0')} src={require('../../content/julius/h3/NA_03_01.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h3', '1')} src={require('../../content/julius/h3/NA_03_02.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h3', '2')} src={require('../../content/julius/h3/NA_03_03.gif')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h3', '3')} src={require('../../content/julius/h3/NA_03_04.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*H4*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon"  onClick={() => this.showImage('h4', '0')} src={require('../../content/icon/h4.png')} />
                            <h5 className="location-link" id="j1">Governor’s House</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h4', '0')} src={require('../../content/julius/h4/NA_04_01.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h4', '1')} src={require('../../content/julius/h4/NA_04_02.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h4', '2')} src={require('../../content/julius/h4/NA_04_03.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h4', '3')} src={require('../../content/julius/h4/NA_04_04.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h4', '4')} src={require('../../content/julius/h4/NA_04_05.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h4', '5')} src={require('../../content/julius/h4/NA_04_06.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h4', '6')} src={require('../../content/julius/h4/NA_04_07.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h4', '7')} src={require('../../content/julius/h4/NA_04_08.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h4', '8')} src={require('../../content/julius/h4/NA_04_09.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h4', '9')} src={require('../../content/julius/h4/NA_04_10.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*h5*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('h5', '0')} src={require('../../content/icon/h5.png')} />
                            <h5 className="location-link" id="j1" >The Great Dock</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image"  onClick={() => this.showImage('h5', '0')}  src={require('../../content/julius/h5/NA_05_01.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image"  onClick={() => this.showImage('h5', '1')}  src={require('../../content/julius/h5/NA_05_02.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image"  onClick={() => this.showImage('h5', '2')}  src={require('../../content/julius/h5/NA_05_03.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image"  onClick={() => this.showImage('h5', '3')}  src={require('../../content/julius/h5/NA_05_04.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*h6*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('h6', '0')} src={require('../../content/icon/h6.png')} />
                            <h5 className="location-link" id="j1" >Pearl Street</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h6', '1')} src={require('../../content/julius/h6/NA_06_01.gif')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h6', '2')} src={require('../../content/julius/h6/NA_06_02.gif')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h6', '3')} src={require('../../content/julius/h6/NA_06_03.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*h7*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('h7', '0')} src={require('../../content/icon/h7.png')} />
                            <h5 className="location-link" id="j1" >Broad Street</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h7', '0')} src={require('../../content/julius/h7/NA_07_01.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h7', '1')} src={require('../../content/julius/h7/NA_07_02.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h7', '2')} src={require('../../content/julius/h7/NA_07_03.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*h8*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('h8', '0')} src={require('../../content/icon/h8.png')} />
                            <h5 className="location-link" id="j1" >Stadhuis</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '0')} src={require('../../content/julius/h8/NA_08_01.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '1')} src={require('../../content/julius/h8/NA_08_02.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '2')} src={require('../../content/julius/h8/NA_08_03.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '3')} src={require('../../content/julius/h8/NA_08_04.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '4')} src={require('../../content/julius/h8/NA_08_05.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '5')} src={require('../../content/julius/h8/NA_08_06.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '6')} src={require('../../content/julius/h8/NA_08_07.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '7')} src={require('../../content/julius/h8/NA_08_08.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '8')} src={require('../../content/julius/h8/NA_08_09.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '9')} src={require('../../content/julius/h8/NA_08_10.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h8', '10')} src={require('../../content/julius/h8/NA_08_11.png')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*h9*/}
                    <div id="index-menu">
                        <div className="holder">
                            <img className="icon" onClick={() => this.showImage('h9', '0')} src={require('../../content/icon/h9.png')} />
                            <h5 className="location-link" id="j1" >Slave Market</h5>
                            <div className="image-holder">
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h9', '0')} src={require('../../content/julius/h9/NA_09_01.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image"  onClick={() => this.showImage('h9', '1')} src={require('../../content/julius/h9/NA_09_02.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h9', '2')} src={require('../../content/julius/h9/NA_09_03.png')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h9', '3')} src={require('../../content/julius/h9/NA_09_04.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h9', '4')} src={require('../../content/julius/h9/NA_09_05.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h9', '5')} src={require('../../content/julius/h9/NA_09_06.jpg')} />
                                </div>
                                <div className="image-container">
                                    <img className="index-image" onClick={() => this.showImage('h9', '6')} src={require('../../content/julius/h9/NA_09_07.jpg')} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
                <br/>

                <div id="index-main">
                    <i className="fa fa-times-circle-o fa-2x closee" aria-hidden="true" onClick={this.hdieImage}></i>
                    {/*site*/}
                    <div className="location-image" id="site-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesSite}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                        slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="site-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesSite}
                            showNav={false}
                            startIndex = '1'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>

                    </div>
                    <div className="location-image" id="site-image-2">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesSite}
                            showNav={false}
                            showFullscreenButton={false}
                            startIndex = '2'
                            showPlayButton={false}
                            slideInterval={2000}/>

                    </div>
                    <div className="location-image" id="site-image-3">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesSite}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            startIndex = '3'
                            slideInterval={2000}/>

                    </div>
                    <div className="location-image" id="site-image-4">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesSite}
                            showNav={false}
                            startIndex = '4'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="site-image-5">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesSite}
                            showNav={false}
                            startIndex = '5'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    {/*j1*/}
                    <div className="location-image" id="j1-image-0">
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesJ1}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>
                    <div className="location-image" id="j1-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesJ1}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            startIndex = '1'
                            slideInterval={2000}/>
                    </div>
                    {/*j2*/}
                    <div className="location-image" id="j2-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesJ2}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>

                    </div>
                    <div className="location-image" id="j2-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesJ2}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            startIndex ='1'
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="j2-image-2">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesJ2}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            startIndex ='2'
                            slideInterval={2000}/>

                    </div>
                    {/*j3*/}
                    <div className="location-image" id="j3-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            showNav={false}
                            items={imagesJ3}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>

                    </div>
                    {/*j4*/}
                    <div className="location-image" id="j4-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesJ4}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="j4-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesJ4}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            startIndex="1"
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="j4-image-2">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesJ4}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            startIndex="2"
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="j4-image-3">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesJ4}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            startIndex="3"
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="j4-image-4">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesJ4}
                            startIndex="4"
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    {/*h1*/}
                    <div className="location-image" id="h1-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH1}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h1-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH1}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            startIndex = '1'
                            slideInterval={2000}/>
                    </div>
                    {/*h2*/}
                    <div className="location-image" id="h2-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH2}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>

                    </div>
                    {/*h3*/}
                    <div className="location-image" id="h3-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH3}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h3-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH3}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            startIndex = '1'
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h3-image-2">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH3}
                            showNav={false}
                            startIndex = '2'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h3-image-3">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH3}
                            showNav={false}
                            startIndex = '3'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    {/*h4*/}
                    <div className="location-image" id="h4-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH4}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h4-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH4}
                            showNav={false}
                            startIndex = '1'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h4-image-2">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH4}
                            startIndex = '2'
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h4-image-3">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH4}
                            startIndex = '3'
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h4-image-4">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH4}
                            showNav={false}
                            startIndex = '4'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h4-image-5">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH4}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            startIndex = '5'
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h4-image-6">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH4}
                            showNav={false}
                            startIndex = '6'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h4-image-7">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH4}
                            startIndex = '7'
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h4-image-8">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH4}
                            showNav={false}
                            startIndex = '8'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h4-image-9">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH4}
                            showNav={false}
                            startIndex = '9'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    {/*h5*/}
                    <div className="location-image" id="h5-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH5}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h5-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH5}
                            showNav={false}
                            startIndex = '1'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h5-image-2">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH5}
                            showNav={false}
                            startIndex = '2'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h5-image-3">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH5}
                            showNav={false}
                            startIndex = '3'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    {/*h6*/}
                    <div className="location-image" id="h6-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH6}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h6-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH6}
                            showNav={false}
                            startIndex = '1'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h6-image-2">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH6}
                            showNav={false}
                            startIndex = '2'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    {/*h7*/}
                    <div className="location-image" id="h7-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH7}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h7-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH7}
                            startIndex = '1'
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h7-image-2">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH7}
                            showNav={false}
                            startIndex = '2'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>

                    {/*h8*/}
                    <div className="location-image" id="h8-image-0">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h8-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            showNav={false}
                            startIndex = '1'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h8-image-2">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            startIndex = '2'
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h8-image-3">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            showNav={false}
                            startIndex = '3'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h8-image-4">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            startIndex = '4'
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h8-image-5">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            showNav={false}
                            startIndex = '5'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h8-image-6">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            showNav={false}
                            startIndex = '6'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h8-image-7">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            startIndex = '7'
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h8-image-8">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            showNav={false}
                            startIndex = '8'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h8-image-9">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            startIndex = '9'
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h8-image-10">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH8}
                            showNav={false}
                            startIndex = '10'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    {/*h9*/}
                    <div className="location-image" id="h9-image-0">
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesH9}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h9-image-1">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH9}
                            showNav={false}
                            startIndex = '1'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h9-image-2">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH9}
                            showNav={false}
                            startIndex = '2'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h9-image-3">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH9}
                            showNav={false}
                            startIndex = '3'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h9-image-4">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH9}
                            startIndex = '4'
                            showNav={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h9-image-5">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH9}
                            showNav={false}
                            startIndex = '5'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                    <div className="location-image" id="h9-image-6">
                        <ImageGallery
                            onThumbnailClick = {this.showFullSizeImage}
                            items={imagesH9}
                            showNav={false}
                            startIndex = '6'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            slideInterval={2000}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPage


