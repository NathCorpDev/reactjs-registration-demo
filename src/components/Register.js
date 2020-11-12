import React, { Component } from 'react';
import { registerUser } from '_services/user.service';

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        registerUser(this.state).then(response => { console.log(response) });
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { username, password, firstName, lastName } = this.state;

        return (
            <div>
                <form className="registerForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="firstName" value={firstName} onChange={this.changeHandler} className="form-control" id="firstName" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={lastName} onChange={this.changeHandler} className="form-control" id="lastName" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="username" value={username} onChange={this.changeHandler} className="form-control" id="username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={this.changeHandler} className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                </form>
            </div>
        )
    }
}

export default Register
