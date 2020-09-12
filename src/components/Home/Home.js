import React from "react";
import "./Home.css";
import Banner from "./Banner/Banner.js";
import Card from "./Card/Card";

const Home = () => {
    return(
        <div className="home">
            <Banner/>

            <div className="home__section">
                <Card src={require('../img/home2.png')} title="Sweet home in Malaysia" decription="Place is located near the lake where you can pretty much enjoy the view.Its best place where friends together or family."/>
                <Card src={require('../img/home3.png')} title="Sweet home in Malaysia" decription="Place is located near the lake where you can pretty much enjoy the view.Its best place where friends together or family."/>
                <Card src={require('../img/home2.png')} title="Sweet home in Malaysia" decription="Place is located near the lake where you can pretty much enjoy the view.Its best place where friends together or family."/>
            </div>

            <div className="home__section">
            <Card src={require('../img/home2.png')} title="Sweet home in Malaysia" decription="Place is located near the lake where you can pretty much enjoy the view.Its best place where friends together or family." price="RM800 /night"/>
                <Card src={require('../img/home3.png')} title="Sweet home in Malaysia" decription="Place is located near the lake where you can pretty much enjoy the view.Its best place where friends together or family." price="RM1500 /night"/>
                <Card src={require('../img/home2.png')} title="Sweet home in Malaysia" decription="Place is located near the lake where you can pretty much enjoy the view.Its best place where friends together or family." price="RM500 /night"/>
            </div>
        </div>
    );
}

export default Home;