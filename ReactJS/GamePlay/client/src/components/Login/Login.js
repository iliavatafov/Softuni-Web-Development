import { Link } from "react-router-dom";
import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";

export const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e) => {
    setInputValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (Object.values(inputValues).some((x) => x === "")) {
      window.alert("All fileds are required!");
      return;
    }

    authService
      .login(...Object.values(inputValues))
      .then((authData) => {
        userLogin(authData);
        navigate("/");
      })
      .catch(() => {
        navigate("/");
      });
  };

  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Sokka@gmail.com"
            onChange={onChange}
            value={inputValues.email}
          />
          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            onChange={onChange}
            value={inputValues.password}
          />
          <input type="submit" className="btn submit" defaultValue="Login" />
          <p className="field">
            <span>
              If you don't have profile click <Link to="/register">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
