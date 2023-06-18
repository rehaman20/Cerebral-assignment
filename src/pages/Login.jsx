import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="login-page">
      <div className="show-component">
        <a href="#">
          <img
            src="/src/assets/celebral-logo.svg"
            alt="Cerebral logo"
            className="logo"
          />
        </a>
        <img src="/src/assets/therapy.png" className="login-img" />
      </div>
      <div className="login-component">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
