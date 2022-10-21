import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const infoRef = useRef();

  const [values, setValues] = useState({
    username: "",
    password: "",
    bio: "",
    gender: "m",
    userType: "individual",
    tac: false,
    egn: "",
    eik: "",
  });

  useEffect(() => {
    if (values.username && values.gender) {
      infoRef.current.value = `${values.username} - ${values.gender}`;
    }
  }, [values.username, values.gender]);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={changeHandler}
              value={values.username}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={changeHandler}
              value={values.password}
            />
          </div>

          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              onChange={changeHandler}
              value={values.bio}
            />
          </div>

          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id="gender"
              onChange={changeHandler}
              value={values.gender}
            >
              <option value="m">M</option>
              <option value="f">F</option>
            </select>
          </div>

          <div>
            <label htmlFor="individual-user-type">Individual: </label>
            <input
              type="radio"
              name="userType"
              value="individual"
              id="individual-user-type"
              onChange={changeHandler}
              checked={values.userType === "individual"}
            />
          </div>

          <div>
            <label htmlFor="corporate-user-type">Corporate: </label>
            <input
              type="radio"
              name="userType"
              value="corporate"
              id="corporate-user-type"
              onChange={changeHandler}
              checked={values.userType === "corporate"}
            />
          </div>

          <div>
            <label htmlFor="identifier">
              {values.userType === "individual" ? "EGN" : "EIK"}
            </label>
            {values.userType === "individual" ? (
              <input
                type="text"
                name="egn"
                id="identifier"
                onChange={changeHandler}
              />
            ) : (
              <input
                type="text"
                name="eik"
                id="identifier"
                onChange={changeHandler}
              />
            )}
          </div>

          <div>
            <label htmlFor="tac">Terms and Conditions: </label>
            <input
              type="checkbox"
              name="tac"
              id="tac"
              onChange={changeHandler}
              value={values.tac}
            />
          </div>

          <div>
            <label htmlFor="uncontrolled-input">Uncontrolled input</label>
            <input
              type="text"
              name="uncontrolled"
              id="uncontrolled-input"
              ref={infoRef}
            />
          </div>

          <input type="submit" disabled={!values.tac} value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
