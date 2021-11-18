//import { Nav } from "Pages/Home/Nav";
import React from "react";
import { connect } from "react-redux";
import { createUser, logInUser } from "actions";
import { withRouter } from "react-router-dom";
// CSS
import "./style2-signin.css";
import Alert from "components/modals/Alert";

class SignIn extends React.Component {
  state = {
    action: this.props.action,
    input: null,
    status: null,
    message: null,
  };

  handleInput = async (e) => {
    await this.setState({ input: e.target.value });
    e.target.value = this.state.input;
  };
  signInForm = async (e) => {
    try {
      const userInfo = {
        email: e.target[0].value,
        password: e.target[1].value,
      };
      await this.props.logInUser(userInfo, this.props.history);
      localStorage.setItem("token", this.props.userInfo.token);

      if (this.props.userInfo.user.isAdmin) {
        this.props.history.push("/admin");
      } else {
        this.props.history.push("/user");
      }
    } catch (e) {
      console.log(e);
      this.setState({ status: "error", message: e.message });
      /* AN ERROR MESSAGE OR SOME POP-UP */
    }
  };
  signUpForm = async (e) => {
    try {
      if (e.target[2].value === e.target[3].value) {
        const userInfo = {
          userName: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value,
        };
        console.log("signUp");
        await this.props.createUser(userInfo, this.props.history);
        localStorage.setItem("token", this.props.userInfo.token);
        this.props.history.push("/user");
      } else {
        throw new Error("Password doesn't match");
      }
    } catch (e) {
      console.log(e);
      this.setState({ status: "error", message: e.message });
      /* AN ERROR MESSAGE OR SOME POP-UP */
    }
    
  };
  render() {
    return (
      <>
        {this.props.error.message || this.state.status === "error" ? (
          <Alert
            status="error"
            message={this.props.error.message || this.state.message}
          />
        ) : null}
        <div
          className={`container ${
            this.state.action === "signUp" ? "sign-up-mode" : ""
          }`}
        >
          <div className="container__forms">
            <div className="form">
              <form
                className="form__sign-in class-change"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.signInForm(e);
                }}
              >
                <h2 className="form__title">Sign In</h2>
                <div className="form__input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={this.handleInput}
                    required
                  />
                </div>
                <div className="form__input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.handleInput}
                    required
                  />
                </div>

                <input className="form__submit" type="submit" value="Login" />
              </form>

              <form
                action=""
                className="form__sign-up class-change"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.signUpForm(e);
                }}
              >
                <h2 className="form__title">Sign Up</h2>
                <div className="form__input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={this.handleInput}
                    required
                  />
                </div>
                <div className="form__input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={this.handleInput}
                    required
                  />
                </div>
                <div className="form__input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.handleInput}
                    required
                  />
                </div>
                <div className="form__input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={this.handleInput}
                    required
                  />
                </div>

                <input className="form__submit" type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
          <div className="container__panels">
            <div className="panel panel__left">
              <div className="panel__content">
                <h3 className="panel__title">New here ?</h3>
                <p className="panel__paragraph">
                  We are very excited to have you on board. Create an account
                  now and start your journey with us.
                </p>
                <button
                  className="signIn-btn btn-transparent"
                  id="sign-up-btn"
                  onClick={() => this.setState({ action: "signUp" })}
                >
                  Sign Up
                </button>
              </div>
              <img
                className="panel__image"
                src="https://stories.freepiklabs.com/storage/11588/market-launch-amico-2628.png"
                alt=""
              />
            </div>
            <div className="panel panel__right">
              <div className="panel__content">
                <h3 className="panel__title">One of us ?</h3>
                <p className="panel__paragraph">
                  We are glad to see you back. Hope you are having an amazing
                  experience.
                </p>
                <button
                  className="signIn-btn btn-transparent"
                  id="sign-in-btn"
                  onClick={() => this.setState({ action: "signIn" })}
                >
                  Sign In
                </button>
              </div>
              <img
                className="panel__image"
                src="https://www.pngkey.com/png/full/444-4444270_ia-press-play-website.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps, { createUser, logInUser })(
  withRouter(SignIn)
);
