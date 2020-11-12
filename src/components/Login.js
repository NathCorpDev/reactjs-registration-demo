import React, { Component } from 'react'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { email, password } = this.state;

        return (
            <div>
                <form className="loginForm">
                    <h2 className="mb-3">Hello There</h2>
                    <p>Login or Sign up to continue</p>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" name="email" value={email} onChange={this.changeHandler} class="form-control" id="email" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                    <p>Forgot Password?</p>
                    <button type="submit" class="btn btn-primary btn-block btn-lg mb-4">Login</button>
                </form>
            </div>
        )
    }
}

export default Login
