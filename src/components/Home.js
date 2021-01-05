import React, { Component } from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Profile from './Profile';
import About from './About';

export default class Home extends Component {
    render() {
        return (
            <section>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 l3">
                    <Profile />
                    </div>
                    <div className="col s12 m8 l9">
                        <About />
                        <Skills />
                        <Experience />
                        <Education />
                    </div>
                </div>
            </div>
            </section>
        )
    }
}