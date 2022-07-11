import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <React.Fragment>
        <article className="">
          <main className="">
            <div className="">
              <fieldset id="sign_up" className="form-container">
                <legend className="">Register</legend>
                <div className="">
                  <input
                    placeholder="Name"
                    className="input-field"
                    type="text"
                    name="text"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="">
                  <input
                    placeholder="Email"
                    className="input-field"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="">
                  <input
                    placeholder="Password"
                    className="input-field"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitRegister}
                  className="btn"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </main>
        </article>
      </React.Fragment>
    );
  }
}

export default Register;
