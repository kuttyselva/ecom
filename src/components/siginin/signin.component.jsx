import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import swal from '@sweetalert/with-react';
import "./signin.styles.scss";
import CustomButton from "../custom-button/custom.component";
import { signinGoogle, auth } from "../../firebase/firebase.utils";
export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
 
  handleSubmit = async event => {
    
 
    event.preventDefault();
    const {email,password}=this.state;
    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      // alert(error.message);
      swal(
        <div >
          <h1>Error !</h1>        
          <p>{error.message}</p>
        </div>
      )
    }
   
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>i already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="name"
            value={this.state.email}
            label="Email"
            required
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            id="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signinGoogle} type="button" isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
