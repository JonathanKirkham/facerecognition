import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <React.Fragment>
        <fieldset id="sign_up" className="form-container">
          <legend className="">Sign In</legend>
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
          <input
            placeholder="Password"
            className="input-field"
            type="password"
            name="password"
            id="password"
            onChange={this.onPasswordChange}
          />
          <div className="">
            <input
              onClick={this.onSubmitSignIn}
              className="btn"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="">
            <p onClick={() => onRouteChange("register")} className="">
              Register
            </p>
          </div>
        </fieldset>
      </React.Fragment>
    );
  }
}

export default SignIn;
