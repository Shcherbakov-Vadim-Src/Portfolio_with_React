import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./style.css";
import About from './components/About';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';

function App() {

    return (<BrowserRouter>
        <div className="main">
            <div className="linksConteiner">
                <Link className="links" to="/about">
                About me
                </Link>
                <Link className="links" to="/portfolio">
                Portfolio
                </Link>
                <Link className="links" to="/contacts">
                Contacts
                </Link>
            </div>
            <hr />
            <Route path="/about" exact component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contacts" exact component={Contacts} />
        </div>
    </BrowserRouter>
    )
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);