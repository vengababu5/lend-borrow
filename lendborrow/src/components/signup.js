import React, { } from "react";

const SignUp = () => {

    return (
        <>
            <form>
                <h3>INTRODUCE YOURSELF</h3>

                <div className="form-group">
                    <label>Hi there! My name is </label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Here's my <b>email address</b></label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>And here's my <b>password:</b></label>
                    <input type="password" className="form-control" />
                </div>


                <div className="flex-container">
                    <button type="submit" className="btn btn-dark btn-lg">Sign me up!</button>
                    or
                <span className="forgot-password sign-up">
                        Sign up with Google
                </span>
                </div>
            </form>
        </>
    );


}
export default SignUp;