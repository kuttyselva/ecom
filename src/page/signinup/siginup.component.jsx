import React from 'react'
import Signin from '../../components/siginin/signin.component';
import Signup from '../../components/signup/signup.component';
import './signinup.styles.scss'
const Signinup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin/>
      <Signup/>
    </div>
  )
}
export default Signinup;
