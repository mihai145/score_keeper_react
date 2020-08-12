import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Match.css'

export default function Match(props) {
        return (
            <div className="col-6 my-3 text-center">
                <div className="match-card p-2 rounded">
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
                                {props.match.country2}
                            </div>
                        </div>
                    </div>
                <br />
                <button className="btn btn-danger mx-2" onClick={() => props.func(props.match._id)}>Delete</button>
                <Link to={`/editMatch/${props.match._id}`} className="btn btn-warning mx-2">Edit</Link>
                </div>
            </div>
        )
}