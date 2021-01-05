import React, { Component } from 'react';

export default class Education extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>EDUCATION</strong></h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Degree</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>BA, English Literature, University of Tampere</td>
                                    <td>2017</td>
                                    <td>Undergraduate, Computer Science, University of Helsinki</td>
                                    <td>2019</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

