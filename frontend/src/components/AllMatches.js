import React from 'react';
import axios from 'axios';
import Match from './Match';

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

    func = (id) => {
        
        this.setState({
            matches: this.state.matches.filter(match => match._id !== id)
        });
        
        axios.delete("http://localhost:5000/match/delete/" + id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {this.state.matches.map(match => (
                        <Match key={match._id} match={match} func={this.func}/>
                    ))}
                </div>
            </div>
        )
    }
}