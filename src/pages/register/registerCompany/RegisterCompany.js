import React from 'react'
import axios from 'axios'


class RegisterCompany extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            country_id: 1,
            city_id: 1,
            errorMessages: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        console.log(event.target);
        event.preventDefault();

        const errorMessages = [];

        if (this.state.name === '') {
            errorMessages.push('Name is required');
        }
        if (this.state.email === '') {
            errorMessages.push('Email is required');
        }
        if (this.state.password === '') {
            errorMessages.push('Password name is required');
        }
        axios.post(process.env.REACT_APP_API_BASE_URL + "/register-company", {

            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password,
            "country_id": this.state.country_id,
            "city_id": this.state.city_id,
        })

            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        this.setState({
            errorMessages: errorMessages
        });
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Företag</h2>
                <form onSubmit={this.onSubmit} className="register-form company-form">
                    <input
                        type="text"
                        className="input-form form-control"
                        placeholder="Företagsnamn"
                        value={this.state.last_name}
                        onChange={this.onChange}
                        name="name"
                    />
                    <input
                        type="email"
                        className="input-form form-control"
                        placeholder="Email"
                        value={this.state.last_name}
                        onChange={this.onChange}
                        name="email"
                    />
                    <input
                        type="password"
                        className="input-form form-control"
                        placeholder="Lösenord"
                        value={this.state.last_name}
                        onChange={this.onChange}
                        name="password"
                    />
                    <input
                        type="password"
                        className="input-form form-control"
                        placeholder="Upprepa lösenord"
                        value={this.state.last_name}
                        onChange={this.onChange}
                        name="password"
                    />
                    <p className="register-paragraph">Har du redan ett konto? Logga in <a href="/login">Här</a>.</p>
                    <div className="justify-content-center text-center register-btn-content">
                        <div className="col button">
                            <input type="submit" className="btn btn-danger"></input>
                        </div>
                        <div className="col">
                            <a className="cancel-register" href="/">Avbryt</a>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default RegisterCompany 