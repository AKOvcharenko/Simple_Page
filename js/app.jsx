import React, {Component} from 'react';
import Navigation from './component_navigation/Navigation.jsx';
import Container from './component_container/Container.jsx';
import Footer from './component_footer/Footer.jsx';
import {render} from 'react-dom';

class App extends Component {
    render(){
        return <div>
            <Navigation/>
            <Container/>
            <Footer/>
        </div>

    }
}

render(<App/>, document.getElementById('app'));