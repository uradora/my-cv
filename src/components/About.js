import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-button">
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className="grey-text">
                            I'm a second year computer science student at University of Helsinki.
                            I'm studying to become a data science major, but right now my focus is on modern web development with Javascript.
                            I have work experience with JavaScript (PERN stack) and school projects done in Java, Python and JavaScript.
                            I use React and Node.js in my JS projects, Git for version control and Heroku for hosting my smaller projects.
                        </p>
                    </div>
                    <div className="card-action">
                        <h6>
                            <strong>PERSONAL INFO</strong>
                        </h6>
                        <div className="row mt">
                            <div className="col s12 m6 l6 xl6">
                                <strong>City:</strong><p className="grey-text"> Helsinki, Finland</p>
                                <strong>Email:</strong><p className="grey-text"> meri.rajamaki@helsinki.fi</p>
                                <strong>Github:</strong><p className="grey-text"> https://github.com/uradora</p>
                            </div>
                            <div className="col s12 m6 l6 xl6">
                                <strong>Main language:</strong><p className="grey-text"> Finnish - Native</p>
                                <strong>Second language:</strong><p className="grey-text"> English - Excellent</p>
                                <strong>Other languages:</strong><p className="grey-text"> Swedish - Good, Japanese - Fair</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
