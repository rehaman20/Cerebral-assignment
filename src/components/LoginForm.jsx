import GoogleButton from "react-google-button";

function LoginForm() {
  return (
    <div>
      <div className="cta cta-login">
        <div className="cta-text-box  login-component">
          <h1>Log into your account</h1>
          <GoogleButton />
          <hr />
          <form action="" className="cta-form login--form">
            <div>
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name=""
                id="full-name"
                placeholder="Password"
                required
              />
            </div>
            <label>Forgot your password?</label>
            <button className="btn btn-login">Login in to my account</button>
            <label>I don't have an account.</label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
