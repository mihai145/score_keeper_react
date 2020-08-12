import React from 'react';
import axios from 'axios';

export default class AddTeam extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            country: ""
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleCountryChange = e => {
        this.setState({
            country: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        axios.post("http://localhost:5000/team/add", {name: this.state.name, country: this.state.country})
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                this.setState({
                    name : "",
                    country : ""
                });
            })
    }

    render() {
        return (
            <div className="container my-3">
                <h3 className="my-2">Add a new team!</h3>

                <form onSubmit={this.handleSubmit}>
                    
                    <div className="form-group">
                        <label>Team name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange} required />
                    </div>

                    <div className="form-group">
                        <label>Country</label>
                        <input type="text" className="form-control" value={this.state.country} onChange={this.handleCountryChange} required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}