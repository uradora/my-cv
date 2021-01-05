import React, { Component } from 'react';
import ImgProfile from '../images/profilepic.jpg';
import { HashLink as Link } from 'react-router-hash-link';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src={ImgProfile} alt="Meri Rajamäki" />
                        <Link className="btn-floating halfway-fab waves-effect wave-light red">
                            <i className="material-icons activator">+</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            Meri Rajamäki
                        </span>
                        <p>Software developer</p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                            Github
                            <i className="material-icons right">x</i>
                        </span>
                        <p className="flex-container">
                            <a href="https://github.com/uradora"><i className="fab fa-github grey-text text-darken-4 social-style"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}