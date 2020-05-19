import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Body from './components/Body/Body';
import Gallery from './components/Gallery/Gallery';
import SlideView from './components/SlideView/SlideView';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route path= "/" exact render={props =>
                            <div>
                                <SlideView />
                                <Body />
                            </div>}
                        />
                        <Route path = "/about" component={About} />
                        <Route path = "/contact" component={Contact} />
                        <Route path = "/gallery" component={Gallery} />
                        />
                    </Switch>
                    <Footer />
                </Router>
            </React.Fragment>
        )
    }
}

export default App;
