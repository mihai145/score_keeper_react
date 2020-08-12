import React from 'react';
import axios from 'axios';
import '../css/Match.css'
// import { Link } from 'react-router-dom';

function Match(props) {
    return (
        <div className="col-6 m-3 text-center p-3 match-card rounded">
            <div className="row">
                <div className="col-4">
                    <strong>{props.match.team1}</strong>
                    <hr />
                    <div className="text-muted">
                        {props.match.country1}
                    </div>
                </div>
                <div className="col-1">
                    {props.match.score1}
                </div>
                <div className="col-2">
                    -
                </div>
                <div className="col-1">
                    {props.match.score2}
                </div>
                <div className="col-4">
                    <strong>{props.match.team2}</strong>
                    <hr />
                    <div className="text-muted">
                        {props.match.country1}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default class AllMatches extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/match")
            .then(res => {
                // console.log(res.data);
                this.setState({
                    matches: res.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    {this.state.matches.map(match => (
                        <Match key={match._id} match={match} />
                    ))}
                </div>
            </div>
        )
    }
}