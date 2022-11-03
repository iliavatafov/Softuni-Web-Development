import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";

export const Register = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

    const { email, password, confirmPassword } = inputValues;

    if (Object.values(inputValues).some((x) => x === "")) {
      window.alert("All fileds are required!");
      return;
    }

    if (password != confirmPassword) {
      window.alert("Password don`t match!");
      return;
    }

    authService.register(email, password).then((authData) => {
      userLogin(authData);
      navigate("/");
    });
  };

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Register</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
            onChange={onChange}
            value={inputValues.email}
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            onChange={onChange}
            value={inputValues.password}
          />
          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={onChange}
            value={inputValues["confirm-password"]}
          />
          <input className="btn submit" type="submit" defaultValue="Register" />
          <p className="field">
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
