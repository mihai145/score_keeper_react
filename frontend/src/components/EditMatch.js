import React from 'react';
import axios from 'axios';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            matchId: "",
            team1: "",
            team2: "",
            score1: 0,
            score2: 0,
            teams: []
        }

        this.handleTeam1Change = this.handleTeam1Change.bind(this);
        this.handleTeam2Change = this.handleTeam2Change.bind(this);
        this.handleScore1Change = this.handleScore1Change.bind(this);
        this.handleScore2Change = this.handleScore2Change.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        axios.get("http://localhost:5000/team")
            .then(res => {
                // console.log(res.data);
                this.setState({
                    teams: res.data
                });
            })
            .catch(err => console.log(err));

        let matchId = "";
        for(let i = 32; i < window.location.href.length; i++)
            matchId += window.location.href[i];
        // console.log(matchId);

        this.setState({
            matchId: matchId
        })

        axios.get("http://localhost:5000/match/" + matchId)
            .then(res => {
                this.setState({
                    team1: res.data.team1,
                    team2: res.data.team2,
                    score1: res.data.score1,
                    score2: res.data.score2,
                });
            })
            .catch(err => {
                console.log(err);
                window.location = "/";
            })
    }

    handleTeam1Change = e => {
        this.setState({
            team1: e.target.value
        });
    }

    handleTeam2Change = e => {
        this.setState({
            team2: e.target.value
        });
    }

    handleScore1Change = e => {
        this.setState({
            score1: e.target.value
        });
    }

    handleScore2Change = e => {
        this.setState({
            score2: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();

        try {
            const country1 = await axios.get("http://localhost:5000/team/whichCountry/" + this.state.team1);
            const country2 = await axios.get("http://localhost:5000/team/whichCountry/" + this.state.team2);
            const res = await axios.post("http://localhost:5000/match/edit/" + this.state.matchId, {
                team1 : this.state.team1,
                country1 : country1.data.country,
                team2 : this.state.team2,
                country2 : country2.data.country,
                score1 : this.state.score1, 
                score2 : this.state.score2
            });
            console.log(res);
            window.location = "/";
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h3 className="my-2">Edit the match!</h3>

                <form onSubmit={this.handleSubmit}>
                    
                    <div className="form-group">
                        <label>Team 1</label>
                        <select className="form-control" onChange={this.handleTeam1Change} value={this.state.team1} required>
                            {this.state.teams.map(team => (
                                <option key={team._id}>{team.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Team 2</label>
                        <select className="form-control" onChange={this.handleTeam2Change} value={this.state.team2} required>
                            {this.state.teams.map(team => (
                                <option key={team._id}>{team.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Score1</label>
                        <input type="number" className="form-control" onChange={this.handleScore1Change} value={this.state.score1} min="0" required />
                    </div>

                    <div className="form-group">
                        <label>Score2</label>
                        <input type="number" className="form-control" onChange={this.handleScore2Change} value={this.state.score2} min="0" required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}