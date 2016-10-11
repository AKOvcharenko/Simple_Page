import React, {Component} from 'react';

class Navigation extends Component {
    render(){
        return <div className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Home</a></li>
                        <li>
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">First Nav<b className="caret"></b></a>
                            <ul className="dropdown-menu multi-level">
                                <li className="dropdown-submenu">
                                    <a href="#">I am Subnav</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">I am Subsubnav</a></li>
                                        <li className="dropdown-submenu">
                                            <a href="#">I am Subsubnav</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="#" >I am Subsubsubnav</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">I am Subnav</a></li>
                                <li><a href="#">I am Subnav</a></li>
                                <li><a href="#">I am Subnav</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Second Nav<b className="caret"></b></a>
                            <ul className="dropdown-menu multi-level">
                                <li className="dropdown-submenu">
                                    <a href="#">I am Subnav</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">I am Subsubnav</a></li>
                                        <li className="dropdown-submenu">
                                            <a href="#">I am Subsubnav</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="#" >I am Subsubsubnav</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">I am Subnav</a></li>
                                <li><a href="#">I am Subnav</a></li>
                                <li><a href="#">I am Subnav</a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Navigation;

