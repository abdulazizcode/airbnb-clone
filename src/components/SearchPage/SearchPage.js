import React from 'react';
import "./SearchPage.css";
import {Button} from "@material-ui/core";
import SearchResult from "./SearchResult/SearchResult";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>
                    62 stays - 25 September to 26 September- 2 guests
                </p>
                <h1>Stays nearby</h1>

                <Button variant='outlined'>Cancellation Flexibillity</Button>
                <Button variant='outlined'>Tyoe of Place </Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filter</Button>
            </div>
            <SearchResult img={require('../img/home3.png')} location="Malaysia, Cyberjaya" title="Place where family and friends are together" desc="The best place where you can spend you time with family and you nearby peoples." star={4.85} price="RM250 /night" total="RM850 /night"/>
            <SearchResult img={require('../img/home4.png')} location="Malaysia, Cyberjaya" title="Place where family and friends are together" desc="The best place where you can spend you time with family and you nearby peoples." star={4.85} price="RM250 /night" total="RM850 /night"/>
            <SearchResult img={require('../img/home2.png')} location="Malaysia, Cyberjaya" title="Place where family and friends are together" desc="The best place where you can spend you time with family and you nearby peoples." star={4.85} price="RM250 /night" total="RM850 /night"/>
        </div>
    )
}

export default SearchPage;
