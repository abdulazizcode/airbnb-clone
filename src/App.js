import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
const App = () =>{
    return(
        <div className="app">
            <Router>
                <Header/>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route>
                        {/* <SearchResult/> */}
                    </Route>
                </Switch>
                {/* <Footer/> */}
            </Router> 
        </div>
    );
}

export default App;