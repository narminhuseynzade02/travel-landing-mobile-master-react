import { Form } from "react-router-dom";
import "./Sign.scss";

export const SignIn = () =>{
    return(
        
        <div className="signup-container">
        <form>
          <h1>Sign Up for Odigo Travel</h1>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" placeholder="Enter your full name"/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password"/>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password"/>
          <button type="submit">Sign Up</button>
          <div className="login">
            <span>Already have an account?</span>
            <a href="#">Log In</a>
          </div>
        </form>
      </div>
    );
};