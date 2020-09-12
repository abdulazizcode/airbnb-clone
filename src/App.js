import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SearchPage  from "./components/SearchPage/SearchPage";

const App = () =>{
    return(
        <div className="app">
            <Router>
                <Header/>
                <Switch>
                <Route path="/search">
                    <SearchPage/>
                </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </Router> 
        </div>
    );
}

export default App;