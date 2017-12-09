import React from 'react'
import './julius.css'
import * as d3 from "d3";
import {  Link} from 'react-router-dom'
import "react-image-gallery/styles/css/image-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';
import ImageGallery from 'react-image-gallery';
import 'font-awesome/css/font-awesome.min.css';

class Julius extends React.Component{

    componentDidMount() {
        // document.getElementById('na-home').style.visibility = "hidden";
        // document.getElementById('na-home').style.opacity= "0";
    }

    constructor(props) {
        super(props);
        // this.mouseOverFunction = this.mouseOverFunction.bind(this);
        // this.mouseOutFunction = this.mouseOutFunction.bind(this);
        this.ShowJulius = this.ShowJulius.bind(this);
        this.ShowHistoric = this.ShowHistoric.bind(this);
        this.ShowBoth = this.ShowBoth.bind(this);
        this.ToggleOldMap = this.ToggleOldMap.bind(this);
        this.ToggleOriginalMap = this.ToggleOriginalMap.bind(this);
        this.ToggleNewMap = this.ToggleNewMap.bind(this);
        this.juliusState = true;
        this.historicState = false;
        this.toggleJulius = this.toggleJulius.bind(this);
        this.toggleHistoric= this.toggleHistoric.bind(this);
        this.drawJH = this.drawJH.bind(this);
        this.clearMap = this.clearMap.bind(this);
        this.siteClicked = this.siteClicked.bind(this);
        this.next = this.next.bind(this);
        this.previous= this.previous.bind(this);

    }

    toggleJulius (){
        if(this.juliusState === true){
            this.juliusState = false
        }else{
            this.juliusState = true;
        }
        this.drawJH()
    }

    toggleHistoric (){
        if(this.historicState === true){
            this.historicState = false
        }else{
            this.historicState = true;
        }
        this.drawJH()
    }

    drawJH (){
        if(document.getElementById('julius-main') !== null){
            if(this.juliusState === true && this.historicState === true){
                this.ShowBoth()
            }
            if(this.juliusState === true && this.historicState === false){
                this.ShowJulius()
            }
            if(this.juliusState === false && this.historicState === true){
                this.ShowHistoric()
            }
            if(this.juliusState === false && this.historicState === false){
                this.clearMap();
            }
        }
    }

    componentDidMount(){
        window.zoomed = false;
        document.getElementById('page-wrap').style.position = "absolute";
        document.getElementById('page-wrap').style.height = "100%";
        document.getElementById('page-wrap').style.width = "100%";

        window.zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", this.zoomed);

        var svg = d3.select("#julius-main").append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("fill","#000000")
            .attr("id", 'julius-map')
            .on("click", this.stopped, true);

        var g = svg.append("g").attr("id", 'julius-map-graph');

        // svg.call(window.zoom);

        g.append("image")
            .attr("id",'julius-image')
            .attr("width",  "100%")
            .attr("height",  "100%")
            .attr("xlink:href", require('../../content/na.png'))
            .on("click", this.reset);

        this.drawPortal();
        window.addEventListener("resize", this.drawJH);
    }

    drawPortal(d){
        var svg = d3.select("#julius-map");
        var g = d3.select('#julius-map-graph');
        var imageRatio = 2351/4816;
        svg.selectAll("circle").remove();
        svg.selectAll("text").remove();
        svg.selectAll("rect").remove();
        var divWidth = document.getElementById('julius-main').clientWidth;
        var divHeight = document.getElementById('julius-main').clientHeight;
        var divRatio = divHeight/divWidth;
        var ix, iy, dx, dy;
        if(divRatio >= imageRatio){
            ix = divWidth;
            iy = divWidth * imageRatio;
            dx = 0;
            dy = (divHeight - iy)/2;
        }else if (divRatio < imageRatio){
            iy = divHeight;
            ix = divHeight / imageRatio;
            dx = (divWidth - ix)/2;
            dy = 0
        }
        // general site infomation
        // var cx = ix * 0.1 + dx;
        // var cy = iy * 0.1 + dy;
        // g.append("circle")
        //     .attr("r", 10)
        //     .attr("cx", cx)
        //     .attr("cy", cy)
        //     .attr("fill","#1B9ED3")
        //     .attr("id","site")
        //     .on("click", this.clicked)
        //     .on('mouseover',this.mouseOverFunction)
        //     .on('mouseout', this.mouseOutFunction);

        // g.append("text")
        //     .attr("dx", cx - 10)
        //     .attr("fill", "#ffffff")
        //     .attr("dy", cy + 5)
        //     .attr("class","location-indexing-site")
        //     .text(function(d){return 'info'});


        // location j1
        var cx = ix * 0.86 + dx;
        var cy = iy * 0.07 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j1")
             .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx  - 4 )
            .attr("fill", "#ffffff")
            .attr("class","location-indexing")
            .attr("dy", cy - (-18) )
            .text(function(d){return '1'});

        // location j2
        var cx = ix * 0.4 + dx;
        var cy = iy * 0.27 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j2")
        .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx -4 )
            .attr("fill", "#ffffff")
            .attr("dy", cy - (-18) )
            .attr("class","location-indexing")
            .text(function(d){return '2'});

        // location j3
        var cx = ix * 0.25 + dx;
        var cy = iy * 0.50 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j3")
        .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy - (-18) )
            .attr("class","location-indexing")
            .text(function(d){return '3'});


        // location j4
        var cx = ix * 0.52 + dx;
        var cy = iy * 0.86 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j4")
        .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx -4)
            .attr("fill", "#ffffff")
            .attr("dy", cy - (-18) )
            .attr("class","location-indexing")
            .text(function(d){return '4'});

    }

    // mouse over
    mouseOverFunction(d) {
        var active = d3.select(null);
        active.classed("active", false);
        active = d3.select(this).classed("active", true);
        if(active._groups[0][0].tagName === "circle"){
            var tooltip = d3.select("#julius-main").append("div").attr("class", "location-toolTip");

            var site_title = "Map Information"
            var j1_title = "Trinity Church"
            var j2_title = "Bowling Green"
            var j3_title = "Customs House"
            var j4_title = "Cornelis Van Trenhoven"
            var h1_title = "Wall St"
            var h2_title = "Broadway"
            var h3_title = "Fort Amsterdam"
            var h4_title = "Governor’s House"
            var h5_title = "The Great Dock"
            var h6_title = "Pearl Street"
            var h7_title = "Broad Street"
            var h8_title = "Stadhuis"
            var h9_title = "Slave Market"
            var title, link;
            if(active.attr('id') == 'j1'){ title = j1_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'j1.jpg'}
            else if(active.attr('id') == 'site'){
                title = site_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'site.jpg'}
            else if(active.attr('id') == 'j2'){ title = j2_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'j2.jpg'}
            else if(active.attr('id') == 'j3'){ title = j3_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'j3.jpg'}
            else if(active.attr('id') == 'j4'){title = j4_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'j4.jpg'}
            else if(active.attr('id') == 'h1'){title = h1_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h1.jpg'}
            else if(active.attr('id') == 'h2'){title = h2_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master//' + 'h2.jpg'}
            else if(active.attr('id') == 'h3'){title = h3_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h3.jpg'}
            else if(active.attr('id') == 'h4'){title = h4_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h4.jpg'}
            else if(active.attr('id') == 'h5'){title = h5_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h5.jpg'}
            else if(active.attr('id') == 'h6'){title = h6_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h6.jpg'}
            else if(active.attr('id') == 'h7'){title = h7_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h7.jpg'}
            else if(active.attr('id') == 'h8'){title = h8_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h8.jpg'}
            else if(active.attr('id') == 'h9'){title = h9_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h9.jpg'}
            tooltip
                .style("left", active.attr('cx') -70   + "px")
                .style("top",parseFloat(active.attr('cy'))  - 180 + "px")
                .style("display", "inline-block")
                .html(
                    "<span >"
                    + "<div>"
                    + "<img style='width: 120px;height: 120px; ' src='" + link + "' />"
                    + "</div>"
                    + "<div style=' word-wrap: break-word;overflow: hidden;max-height: 170px; font-size:11px!important;'>"
                    + title
                    + "</div>"
                    + "</span>"
                );

            active.transition()
                .duration("500")
                .attr("r", 15)
                .ease(d3.easeBounce);
        }else{
            var tooltip = d3.select("#julius-main").append("div").attr("class", "location-toolTip");

            var j1_title = "Trinity Church"
            var j2_title = "Bowling Green"
            var j3_title = "Customs House"
            var j4_title = "Cornelis Van Trenhoven"
            var h1_title = "Wall St"
            var h2_title = "Broadway"
            var h3_title = "Fort Amsterdam"
            var h4_title = "Governor’s House"
            var h5_title = "The Great Dock"
            var h6_title = "Pearl Street"
            var h7_title = "Broad Street"
            var h8_title = "Stadhuis"
            var h9_title = "Slave Market"
            var title, link;
            if(active.attr('id') == 'j1'){ title = j1_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'j1.jpg'}
            else if(active.attr('id') == 'j2'){ title = j2_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'j2.jpg'}
            else if(active.attr('id') == 'j3'){ title = j3_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'j3.jpg'}
            else if(active.attr('id') == 'j4'){title = j4_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'j4.jpg'}
            else if(active.attr('id') == 'h1'){title = h1_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h1.jpg'}
            else if(active.attr('id') == 'h2'){title = h2_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master//' + 'h2.jpg'}
            else if(active.attr('id') == 'h3'){title = h3_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h3.jpg'}
            else if(active.attr('id') == 'h4'){title = h4_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h4.jpg'}
            else if(active.attr('id') == 'h5'){title = h5_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h5.jpg'}
            else if(active.attr('id') == 'h6'){title = h6_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h6.jpg'}
            else if(active.attr('id') == 'h7'){title = h7_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h7.jpg'}
            else if(active.attr('id') == 'h8'){title = h8_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h8.jpg'}
            else if(active.attr('id') == 'h9'){title = h9_title;
                link = 'https://raw.githubusercontent.com/chepilot/thumbnails0/master/' + 'h9.jpg'}

            tooltip
                .style("left", active.attr('x') - 60   + "px")
                .style("top",parseFloat(active.attr('y'))  - 170 + "px")
                .style("display", "inline-block")
                .html(
                    "<span >"
                        + "<div>"
                            + "<img style='width: 120px;height: 120px; ' src='" + link +"' />"
                        + "</div>"
                    + "<div style=' word-wrap: break-word;overflow: hidden;max-height: 170px; font-size:11px!important;'>"
                    + title
                    + "</div>"
                    + "</span>"
                )

            active.transition()
                .duration("500")
                .attr("width", 22)
                .attr("height", 22)
                .ease(d3.easeBounce);
        }

        // this.showDetail()
    }

    mouseOutFunction() {
        var svg = d3.select("#julius-map");

        svg.selectAll('circle').transition()
            .duration("500")
            .attr("r", 10)
            .ease(d3.easeBounce);
        // this.hideDetail()
        svg.selectAll('rect').transition()
            .duration("500")
            .attr("width", 18)
            .attr("height", 18)
            .ease(d3.easeBounce);
        d3.selectAll(".location-toolTip").style("display", "none");
        // delete tooltip
    }

    clicked(d){
        var width = 960,
            height = 500;
        window.zoomed = true;

        for(var i = 0; i < document.getElementsByClassName('location-images').length; i++){
            document.getElementsByClassName('location-images')[i].style.display='block';
        }
        var active = d3.select(null);
        active.classed("active", false);
        active = d3.select(this).classed("active", true);
        var bbox = this.getBBox();
        var scale = Math.max(1, Math.min(4, 0.9 / Math.max(bbox.width / width, bbox.height / height))),
            translate = [width / 2 - scale * bbox.x, height / 2 - scale * bbox.y];
        var id= active._groups[0][0].id;
        window.currentId = id;

        for(var i =0; i <document.getElementById(window.currentId+'-image').childNodes.length;i++){
            document.getElementById(window.currentId+'-image').childNodes[i].style.display = "block"
        }

        d3.select("#julius-map").transition()
            .duration(1000)
            .call( window.zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale) );
        document.getElementById('julius-links').style.display = 'none';
        document.getElementById('start-here').style.display = 'none';
        document.getElementById(id + '-image').style.visibility  ='visible';
        document.getElementById(id + '-image').style.opacity = '1';
        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.display ='block'
        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.visibility ='visible';

        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.opacity ='1'


    }

    siteClicked(){
        document.getElementById('julius-links').style.display = 'none';
        document.getElementById('start-here').style.display = 'none';
        document.getElementById('site-image').style.visibility  ='visible';
        document.getElementById('site-image').style.display  ='block';
        document.getElementById('site-image').style.opacity = '1';
        document.getElementById('site-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.display ='block'
        document.getElementById('site-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.visibility ='visible';

        document.getElementById('site-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.opacity ='1'
        window.currentId = "site"
    }

    next(){
        for(var i =0; i <document.getElementsByClassName('location-images').length;i++) {
            document.getElementsByClassName('location-images')[i].style.display = "none";
            document.getElementsByClassName('location-images')[i].style.visibility = 'hide';
            document.getElementsByClassName('location-images')[i].style.opacity = '0';
        }

        window.zoomed = false;
        var active = d3.select(null);
        active.classed("active", false);
        active = d3.select(null);

        d3.select('#julius-map').transition()
            .duration(300)
            .call( window.zoom.transform, d3.zoomIdentity );

        if(window.currentId == "j1"){
            window.currentId = "j2"
        }else if(window.currentId == "j2"){
            window.currentId = "j3"
        }else if(window.currentId == "j3"){
            window.currentId = "j4"
        }else if(window.currentId == "j4"){
            window.currentId = "j1"
        } else if(window.currentId == "h1"){
            window.currentId = "h2"
        }else if(window.currentId == "h2"){
            window.currentId = "h3"
        }else if(window.currentId == "h3"){
            window.currentId = "h4"
        }else if(window.currentId == "h4"){
            window.currentId = "h5"
        }else if(window.currentId == "h5"){
            window.currentId = "h6"
        }else if(window.currentId == "h6"){
            window.currentId = "h7"
        }else if(window.currentId == "h7"){
            window.currentId = "h8"
        }else if(window.currentId == "h8"){
            window.currentId = "h9"
        }else if(window.currentId == "h9"){
            window.currentId = "h1"
        }

        for(var i =0; i <document.getElementById(window.currentId+'-image').childNodes.length;i++){
            document.getElementById(window.currentId+'-image').childNodes[i].style.display = "block"
        }
        document.getElementById(window.currentId + '-image').style.display = "block";
        var width = 960,
            height = 500;
        window.zoomed = true;

        var bbox = d3.select("#" + window.currentId).node().getBBox();
        var scale = Math.max(1, Math.min(4, 0.9 / Math.max(bbox.width / width, bbox.height / height))),
            translate = [width / 2 - scale * bbox.x, height / 2 - scale * bbox.y];
        var id=window.currentId;
        d3.select("#julius-map").transition()
            .duration(1400)
            .call( window.zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale) );

        document.getElementById('julius-links').style.display = 'none';
        document.getElementById('start-here').style.display = 'none';
        document.getElementById(id + '-image').style.visibility  ='visible';
        document.getElementById(id + '-image').style.opacity = '1';
        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.display ='block'
        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.visibility ='visible';

        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.opacity ='1'
    }

    previous(){
        for(var i =0; i <document.getElementsByClassName('location-images').length;i++) {
            document.getElementsByClassName('location-images')[i].style.display = "none";
            document.getElementsByClassName('location-images')[i].style.visibility = 'hide';
            document.getElementsByClassName('location-images')[i].style.opacity = '0';
        }

        window.zoomed = false;
        var active = d3.select(null);
        active.classed("active", false);
        active = d3.select(null);

        d3.select('#julius-map').transition()
            .duration(300)
            .call( window.zoom.transform, d3.zoomIdentity );

        if(window.currentId == "j1"){
            window.currentId = "j4"
        }else if(window.currentId == "j2"){
            window.currentId = "j1"
        }else if(window.currentId == "j3"){
            window.currentId = "j2"
        }else if(window.currentId == "j4"){
            window.currentId = "j3"
        } else if(window.currentId == "h1"){
            window.currentId = "h9"
        }else if(window.currentId == "h2"){
            window.currentId = "h1"
        }else if(window.currentId == "h3"){
            window.currentId = "h2"
        }else if(window.currentId == "h4"){
            window.currentId = "h3"
        }else if(window.currentId == "h5"){
            window.currentId = "h4"
        }else if(window.currentId == "h6"){
            window.currentId = "h5"
        }else if(window.currentId == "h7"){
            window.currentId = "h6"
        }else if(window.currentId == "h8"){
            window.currentId = "h7"
        }else if(window.currentId == "h9"){
            window.currentId = "h8"
        }

        for(var i =0; i <document.getElementById(window.currentId+'-image').childNodes.length;i++){
            document.getElementById(window.currentId+'-image').childNodes[i].style.display = "block"
        }
        document.getElementById(window.currentId + '-image').style.display = "block";
        var width = 960,
            height = 500;
        window.zoomed = true;

        var bbox = d3.select("#" + window.currentId).node().getBBox();
        var scale = Math.max(1, Math.min(4, 0.9 / Math.max(bbox.width / width, bbox.height / height))),
            translate = [width / 2 - scale * bbox.x, height / 2 - scale * bbox.y];
        var id=window.currentId;
        d3.select("#julius-map").transition()
            .duration(1400)
            .call( window.zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale) );

        document.getElementById('julius-links').style.display = 'none';
        document.getElementById('start-here').style.display = 'none';
        document.getElementById(id + '-image').style.visibility  ='visible';
        document.getElementById(id + '-image').style.opacity = '1';
        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.display ='block'
        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.visibility ='visible';

        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.opacity ='1'
    }

    reset() {
        if(window.currentId){
            document.getElementById(window.currentId+'-image').
            getElementsByClassName('image-gallery')[0].
            getElementsByClassName('image-gallery-content')[0].
            getElementsByClassName('image-gallery-slide-wrapper')[0].
                style.visibility ='hide';

            document.getElementById(window.currentId+'-image').
            getElementsByClassName('image-gallery')[0].
            getElementsByClassName('image-gallery-content')[0].
            getElementsByClassName('image-gallery-slide-wrapper')[0].
                style.opacity ='0';
        }

        window.currentId = '';
        window.zoomed = false;
        var active = d3.select(null);
        active.classed("active", false);
        active = d3.select(null);

        d3.select('#julius-map').transition()
            .duration(750)
            .call( window.zoom.transform, d3.zoomIdentity );

        document.getElementById('julius-links').style.display = 'block';
        document.getElementById('start-here').style.display = 'block';

        for(var i = 0; i < document.getElementsByClassName('location-images').length; i++){
            document.getElementsByClassName('location-images')[i].style.visibility ='hidden';
            document.getElementsByClassName('location-images')[i].style.opacity ='0';
            document.getElementsByClassName('location-images')[i].style.display='none';
        }
    }

    zoomed() {
        var g = d3.select('#julius-map-graph');
        g.style("stroke-width", 1.5 / d3.event.transform.k + "px");
        g.attr("transform", d3.event.transform);
    }

    stopped() {
        if (d3.event.defaultPrevented) d3.event.stopPropagation();
    }

    // todo hover show info
    showDetail (){
        if(window.zoomed !== true){
            document.getElementById('location-detail').style.visibility = 'visible';
            document.getElementById('location-detail').style.opacity = '1';
        }
    }

    hideDetail(){
        document.getElementById('location-detail').style.visibility = 'hidden';
        document.getElementById('location-detail').style.opacity = '0';
    }

    zoom(){
        var event = document.createEvent("SVGEvents");
        event.initEvent("click",true,true);
        document.getElementById('location').dispatchEvent(event);

        // document.getElementById('julius-info').style.display = 'none';
        // document.getElementById('julius-links').style.display = 'none';
        // document.getElementById('location-info').style.visibility  ='visible';
        // document.getElementById('location-info').style.opacity = '1';
    }

    clearMap(){
        var svg = d3.select("#julius-map");
        var g = d3.select('#julius-map-graph');
        svg.selectAll("circle").remove();
        svg.selectAll("rect").remove();
        svg.selectAll("text").remove();
    }

    ShowJulius(){
        var svg = d3.select("#julius-map");
        var g = d3.select('#julius-map-graph');
        var imageRatio = 2351/4816;
        svg.selectAll("circle").remove();
        svg.selectAll("rect").remove();
        svg.selectAll("text").remove();
        var divWidth = document.getElementById('julius-main').clientWidth;
        var divHeight = document.getElementById('julius-main').clientHeight;
        var divRatio = divHeight/divWidth;
        var ix, iy, dx, dy;
        if(divRatio >= imageRatio){
            ix = divWidth;
            iy = divWidth * imageRatio;
            dx = 0;
            dy = (divHeight - iy)/2;
        }else if (divRatio < imageRatio){
            iy = divHeight;
            ix = divHeight / imageRatio;
            dx = (divWidth - ix)/2;
            dy = 0
        }

        // var cx = ix * 0.1 + dx;
        // var cy = iy * 0.1 + dy;
        // g.append("circle")
        //     .attr("r", 10)
        //     .attr("cx", cx)
        //     .attr("cy", cy)
        //     .attr("fill","#1B9ED3")
        //     .attr("id","site")
        //     .on("click", this.clicked)
        //     .on('mouseover',this.mouseOverFunction)
        //     .on('mouseout', this.mouseOutFunction);

        // g.append("text")
        //     .attr("dx", cx - 10)
        //     .attr("fill", "#ffffff")
        //     .attr("dy", cy + 5)
        //     .attr("class","location-indexing-site")
        //     .text(function(d){return 'info'});

        // location j1
        var cx = ix * 0.86 + dx;
        var cy = iy * 0.07 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("fill","#887bb9")
            .attr("id","j1")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);
        g.append("text")
            .attr("dx", cx -4 )
            .attr("fill", "#ffffff")
            .attr("class","location-indexing")
            .attr("dy", cy - (-18) )
            .text(function(d){return '1'});

        // location j2
        var cx = ix * 0.4 + dx;
        var cy = iy * 0.27 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j2")
            .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);
        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("class","location-indexing")
            .attr("dy", cy - (-18) )
            .text(function(d){return '2'});

        // location j3
        var cx = ix * 0.25 + dx;
        var cy = iy * 0.50 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j3")
            .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("class","location-indexing")
            .attr("dy", cy - (-18) )
            .text(function(d){return '3'});

        // location j4
        var cx = ix * 0.52 + dx;
        var cy = iy * 0.86 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j4")
            .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("class","location-indexing")
            .attr("dy", cy - (-18) )
            .text(function(d){return '4'});
    }

    ShowHistoric(){
        var svg = d3.select("#julius-map");
        var g = d3.select('#julius-map-graph');
        var imageRatio = 2351/4816;
        svg.selectAll("rect").remove();
        svg.selectAll("circle").remove();
        svg.selectAll("text").remove();
        var divWidth = document.getElementById('julius-main').clientWidth;
        var divHeight = document.getElementById('julius-main').clientHeight;
        var divRatio = divHeight/divWidth;
        var ix, iy, dx, dy;
        if(divRatio >= imageRatio){
            ix = divWidth;
            iy = divWidth * imageRatio;
            dx = 0;
            dy = (divHeight - iy)/2;
        }else if (divRatio < imageRatio){
            iy = divHeight;
            ix = divHeight / imageRatio;
            dx = (divWidth - ix)/2;
            dy = 0
        }

        // var cx = ix * 0.1 + dx;
        // var cy = iy * 0.1 + dy;
        // g.append("circle")
        //     .attr("r", 10)
        //     .attr("cx", cx)
        //     .attr("cy", cy)
        //     .attr("fill","#1B9ED3")
        //     .attr("id","site")
        //     .on("click", this.clicked)
        //     .on('mouseover',this.mouseOverFunction)
        //     .on('mouseout', this.mouseOutFunction);
        //
        // g.append("text")
        //     .attr("dx", cx - 10)
        //     .attr("fill", "#ffffff")
        //     .attr("dy", cy + 5)
        //     .attr("class","location-indexing-site")
        //     .text(function(d){return 'info'});

        // location 1
        var cx = ix * 0.90 + dx;
        var cy = iy * 0.39 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#5054a4")
            .attr("id","h1")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '1'});

        // location 2
        var cx = ix * 0.51 + dx;
        var cy = iy * 0.22 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#d41d83")
            .attr("id","h2")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '2'});



        // location 3
        var cx = ix * 0.20 + dx;
        var cy = iy * 0.35 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#992022")
            .attr("id","h3")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '3'});

        // location 4
        var cx = ix * 0.17 + dx;
        var cy = iy * 0.84 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#1b9ed3")
            .attr("id","h4")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '4'});

        // location 5
        var cx = ix * 0.28 + dx;
        var cy = iy * 0.83 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#db2c2b")
            .attr("id","h5")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '5'});


        // location 6
        var cx = ix * 0.40 + dx;
        var cy = iy * 0.83 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#5fc2ae")
            .attr("id","h6")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '6'});


        // location 7
        var cx = ix * 0.51 + dx;
        var cy = iy * 0.58 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#ea7b24")
            .attr("id","h7")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '7'});

        // location 8
        var cx = ix * 0.49 + dx;
        var cy = iy * 0.89 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#e5c71f")
            .attr("id","h8")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '8'});

        // location 9
        var cx = ix * 0.91 + dx;
        var cy = iy * 0.93 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#407555")
            .attr("id","h9")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '9'});

    };

    ShowBoth(){
        var svg = d3.select("#julius-map");
        var g = d3.select('#julius-map-graph');
        var imageRatio = 2351/4816;
        svg.selectAll("circle").remove();
        svg.selectAll("rect").remove();
        var divWidth = document.getElementById('julius-main').clientWidth;
        var divHeight = document.getElementById('julius-main').clientHeight;
        var divRatio = divHeight/divWidth;
        var ix, iy, dx, dy;
        if(divRatio >= imageRatio){
            ix = divWidth;
            iy = divWidth * imageRatio;
            dx = 0;
            dy = (divHeight - iy)/2;
        }else if (divRatio < imageRatio){
            iy = divHeight;
            ix = divHeight / imageRatio;
            dx = (divWidth - ix)/2;
            dy = 0
        }

        // var cx = ix * 0.1 + dx;
        // var cy = iy * 0.1 + dy;
        // g.append("circle")
        //     .attr("r", 10)
        //     .attr("cx", cx)
        //     .attr("cy", cy)
        //     .attr("fill","#1B9ED3")
        //     .attr("id","site")
        //     .on("click", this.clicked)
        //     .on('mouseover',this.mouseOverFunction)
        //     .on('mouseout', this.mouseOutFunction);
        //
        // g.append("text")
        //     .attr("dx", cx - 10)
        //     .attr("fill", "#ffffff")
        //     .attr("dy", cy + 5)
        //     .attr("class","location-indexing-site")
        //     .text(function(d){return 'info'});

        // location j1
        var cx = ix * 0.86 + dx;
        var cy = iy * 0.07 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j1")
            .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx -4 )
            .attr("fill", "#ffffff")
            .attr("class","location-indexing")
            .attr("dy", cy - (-18) )
            .text(function(d){return '1'});


        // location j2
        var cx = ix * 0.4 + dx;
        var cy = iy * 0.27 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j2")
            .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("class","location-indexing")
            .attr("dy", cy - (-18) )
            .text(function(d){return '2'});


        // location j3
        var cx = ix * 0.25 + dx;
        var cy = iy * 0.50 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j3")
            .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx -4 )
            .attr("fill", "#ffffff")
            .attr("class","location-indexing")
            .attr("dy", cy - (-18) )
            .text(function(d){return '3'});


        // location j4
        var cx = ix * 0.52 + dx;
        var cy = iy * 0.86 + dy;
        g.append("rect")
            .attr("x", cx)
            .attr("y", cy)
            .attr("width",18)
            .attr("height",18)
            .attr("id","j4")
            .attr("fill","#887bb9")
            .attr("transform",  "rotate(45," + cx + "," + cy + ")")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx -4 )
            .attr("fill", "#ffffff")
            .attr("class","location-indexing")
            .attr("dy", cy - (-18) )
            .text(function(d){return '4'});


        // location 1
        var cx = ix * 0.90 + dx;
        var cy = iy * 0.39 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#5054a4")
            .attr("id","h1")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '1'});

        // location 2
        var cx = ix * 0.51 + dx;
        var cy = iy * 0.22 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#d41d83")
            .attr("id","h2")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '2'});


        // location 3
        var cx = ix * 0.20 + dx;
        var cy = iy * 0.35 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#992022")
            .attr("id","h3")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '3'});

        // location 4
        var cx = ix * 0.17 + dx;
        var cy = iy * 0.84 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#1b9ed3")
            .attr("id","h4")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '4'});

        // location 5
        var cx = ix * 0.28 + dx;
        var cy = iy * 0.83 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#db2c2b")
            .attr("id","h5")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '5'});


        // location 6
        var cx = ix * 0.40 + dx;
        var cy = iy * 0.83 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#5fc2ae")
            .attr("id","h6")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '6'});


        // location 7
        var cx = ix * 0.51 + dx;
        var cy = iy * 0.58 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#ea7b24")
            .attr("id","h7")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '7'});


        // location 8
        var cx = ix * 0.49 + dx;
        var cy = iy * 0.89 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#e5c71f")
            .attr("id","h8")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '8'});


        // location 9
        var cx = ix * 0.91 + dx;
        var cy = iy * 0.93 + dy;
        g.append("circle")
            .attr("r", 10)
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("fill","#407555")
            .attr("id","h9")
            .on("click", this.clicked)
            .on('mouseover',this.mouseOverFunction)
            .on('mouseout', this.mouseOutFunction);

        g.append("text")
            .attr("dx", cx - 4)
            .attr("fill", "#ffffff")
            .attr("dy", cy + 5)
            .attr("class","location-indexing")
            .text(function(d){return '9'});


    };

    ToggleNewMap(){
        var g = d3.select('#julius-map-graph');
        g.select("image")
            .attr("xlink:href", require('../../content/na1.png'))
            .on("click", this.reset);
        document.getElementById('old-map').style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
        document.getElementById('new-map').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        }

    ToggleOldMap(){
        var g = d3.select('#julius-map-graph');
        g.select("image")
            .attr("xlink:href", require('../../content/na.png'))
            .on("click", this.reset);
        document.getElementById('old-map').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        document.getElementById('new-map').style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
    }

    ToggleOriginalMap(){
        var g = d3.select('#julius-map-graph');
        g.select("image")
            .attr("xlink:href", require('../../content/na2.png'))
            .on("click", this.reset);
        document.getElementById('old-map').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        document.getElementById('new-map').style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
    }

    showFullSizeImage(){

        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
                        style.visibility ='visible';

        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
                        style.opacity ='1'

        document.getElementById(window.currentId+'-image').
        getElementsByClassName('image-gallery')[0].
        getElementsByClassName('image-gallery-content')[0].
        getElementsByClassName('image-gallery-slide-wrapper')[0].
            style.display ='block'
    }

    render() {
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

        return (
            <div id="julius">
                <Link   to='/'>
                <img className="inline-image" src={require('../../content/nahome/icon.png')} />
                </Link>
                <div id="start-here">
                    The New Amsterdam map is organized into two categories, connected to either the history of New York or the text of <i>Open City </i>itself. Each icon is color-coordinated: purple icons indicate quotes from Julius, while the other colors indicate Manhattan’s general historic context.
                    <br/><br/>
                    Selecting an icon brings up the image gallery for each site. After exploring the images, click the exit button to return back to the main map. Remember, you can always click the icon at the top left of the page to return home.
                    <br/><br/>
                    <a onClick={this.siteClicked}> Start Here >> </a>
                </div>
                <div id="julius-menu">
                    <div id="julius-links">
                        <div className="return">
                            <Link to='/NaHome'>
                                <i className="fa fa-lg fa-long-arrow-left" aria-hidden="true"></i>
                                &nbsp; &nbsp; Return to New Amsterdam Home
                            </Link>
                        </div>

                        <div className="checkboxs">
                            <div className="checkbox">
                                <div className="checkbox-holder" x= "Read Julius’ reflections of Manhattan.">
                                <input    type="checkbox"  onChange={this.toggleJulius} defaultChecked={true}/>
                                    <label className="checkbox-label">
                                        &nbsp;Julius Map Locations
                                    </label>
                                </div>
                            </div>
                            <div className="checkbox">
                                <div className="checkbox-holder" x= "Explore the colony’s past.">
                                <input    type="checkbox"  onChange={this.toggleHistoric} defaultChecked={false}/>
                                    <label className="checkbox-label">
                                        &nbsp;Historic Map Locations
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="buttons">
                            <div className="temp">
                                <button id='old-map' x= "See New Amsterdam."  type="button" className="btn btn-secondary btn-sm" onClick={this.ToggleOldMap}>
                                    Simulated Map
                                </button>
                            </div>
                            <div className="temp">
                                <button id='new-map' x= "See contemporary New York."  type="button" className="btn btn-secondary b1tn-sm" onClick={this.ToggleNewMap}>
                                    Contemporary Map
                                </button>
                            </div>
                            <div className="temp">
                                <button id='new-map-1' x= "See a historic image of the site."  type="button" className="btn btn-secondary b1tn-sm" onClick={this.ToggleOriginalMap}>
                                    Original Map
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="julius-main">
                    <div id="location-detail">
                    </div>
                </div>

                <div className="location-images" id="site-image">
                    <div className="image-box">
                        <h5 className="location-title">Historic/Julius Map </h5>
                        <br/> <br/>
                        The first several of these images are a collection of early maps and engravings made of the original settlement, dating from 1664 to the 20th century.
                        <br/> <br/>
                        The final two images are the coat of arms of the Dutch West India Company, and of the 1579 Union of Utrecht. This document was extremely important– besides uniting the Netherlands, it made religious acceptance state policy, shaping New Amsterdam’s culture of tolerance over forty years before the colony’s founding.
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>

                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesSite}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="j1-image" >
                    <div className="image-box nav" >
                        <h5 className="location-title">Trinity Church </h5>
                        <br/> <br/>
                        “Trinity Church was chartered in the waning years of the seventeenth century; seafarers in general and whalers in particular had set out on their outbound journeys with the blessings of its congregation. It was to the same church that they returned, if they had been blessed with a safe and prosperous voyage, to give thanks for journeying mercies.” (pp.49)
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton"> &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next}className="nextButton"  > next &gt;&gt;&nbsp;</a>
                    </div>

                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>

                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesJ1}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="j2-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Bowling Green
                        </h5>
                        <br/> <br/>
                        “The Customs House faced Bowling Green, which had been used in the seventeenth century for executions of paupers and slaves.” (pp.163)
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>

                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesJ2}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>

                </div>

                <div className="location-images" id="j3-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Customs House
                        </h5>
                        <br/> <br/>
                        “In profiting from slavery, the City Bank of New York was not unlike other companies...in the same time period...investing the profits of the sugar planters, facilitating the processing of the cargo at the New York City Customs House, and helping finance the acquisition of a ‘labor force.’”(pp.163)
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next}className="nextButton"  > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>

                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesJ3}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="j4-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Cornelius Van Tienhoven
                        </h5>
                        <br/> <br/>
                        “In profiting from slavery, the City Bank of New York was not unlike other companies...in the same time period...investing the profits of the sugar planters, facilitating the processing of the cargo at the New York City Customs House, and helping finance the acquisition of a ‘labor force.’”(pp.163)
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesJ4}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="h1-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Wall Street
                        </h5>
                        <br/> <br/>
                        Wall Street marks the northern boundary of the city, constructed by the Dutch in defense of their English enemies in 1652. While the fortification was never used in defense of foreign attack (New Amsterdam was turned over to the English without a shot being fired), the wooden structure regardless gave tangible shape to the small settlement.
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesH1}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="h2-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Broadway
                        </h5>
                        <br/> <br/>
                        What we today know as “Broadway” was once called the Wickquasgeck Trail, an important trade route used by the indigenous Lanape long before the Dutch arrived. It remained a major thoroughfare in the original colony as well. Looking at Broadway from above, you can still make out the meandering course of the road that once served as Manhattan’s original highway.
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesH2}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="h3-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Fort Amsterdam
                        </h5>
                        <br/> <br/>
                        Fort Amsterdam was initially intended as a state-of-the-art diamond-shaped fortification, built of stone and bristling with cannon. However, a housing shortage in 1625 forced the town to cut costs and divert resources elsewhere. The actual fortress was instead a simple square structure of brick walls, mounded over with dirt. Much of the fortifications were dug through the use of slave labor. The location previously held by Fort Amsterdam is now occupied by the National Museum of the American Indian.
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesH3}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="h4-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Director-General’s House
                        </h5>
                        <br/> <br/>
                        The home of Dutch Director-General Stuyvesant, it was the second largest building in New Amsterdam after the State House.
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesH4}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="h5-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            The Great Dock
                        </h5>
                        <br/> <br/>
                        The Great Dock was the mercantile heart of the bustling New Amsterdam colony. Its proximity to the canal at Broad Street allowed ships to travel into the interior of the settlement. Even under English rule, this was the only dock extending into New York’s bay till the late 18th century.
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesH5}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="h6-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Pearl Street
                        </h5>
                        <br/> <br/>
                        Pearl Street was once the waterfront street of Manhattan. The road was so named for the piles of spent oyster shells that once covered the area, left there from the earlier Lenape settlement of Kapsee Village. It is reported that the Dutch, upon finding these shell piles, were excited to discover at the site a large number of pearls (which the Lenape didn’t value).
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesH6}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="h7-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Broad Street
                        </h5>
                        <br/> <br/>
                        Named for the wide canal that divided the street in two, Broad Street allowed ships to easily access the interior of the settlement.
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesH7}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="h8-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Stadhuis
                        </h5>
                        <br/> <br/>
                        The State House of New Amsterdam, it would have been the largest structure in the city during this early colonial period. Here the authorities governed the eight thousand people that occupied the settlement by 1664. <br/>
                        Though the original Stadhuis no longer stands, extensive archaeological research on the site has revealed a plethora of beads, tools, pipes and other goods dated to that era, along with the cornerstone of the original building itself.
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesH8}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

                <div className="location-images" id="h9-image">
                    <div className="image-box nav">
                        <h5 className="location-title">
                            Slave Market

                        </h5>
                        <br/> <br/>
                        A full third of New Amsterdam’s residents consisted of slaves. African laborers were sold into bondage at the slave market, which was operated between 1711 and 1762. Under consecutive Dutch and British governments, slave labor was common in the colony, particularly in farming and the construction of public works.
                        <br/><br/>
                        <a onClick={this.previous} className="previousButton" > &nbsp;&lt;&lt; previous </a>
                        <a onClick={this.next} className="nextButton" > next &gt;&gt;&nbsp;</a>
                    </div>
                    <i className="fa fa-times-circle-o fa-2x closeBox" aria-hidden="true" onClick={this.reset}></i>
                    <ImageGallery
                        onThumbnailClick = {this.showFullSizeImage}
                        items={imagesH9}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        slideInterval={2000}/>
                </div>

            </div>
        );
    }
}


export default Julius


