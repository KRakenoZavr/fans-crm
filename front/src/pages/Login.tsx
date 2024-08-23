import React, { useState } from "react";
import { useUser } from "../Context";
import { Link } from "react-router-dom";
import { User } from "../types/user";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const LoginComponent = () => {
  const { ctx, changeLogged, changeUser } = useUser();

  const inputs = ["name", "phone", "email", "password"];

  const [user, setUser] = useState<User>(
    inputs.reduce((k, v) => ({ ...k, [v]: "" }), {}) as User
  );

  const handleFieldChange = (value: string, field: string) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const handleLogin = () => {
    if (Object.values(user).some((v) => !v)) {
      alert("fill out all fields");
      return;
    }

    changeUser(user);

    changeLogged(true);

    alert("successfully logged in");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "8px",
        }}
      >
        {inputs.map((field, i) => {
          return (
            <label key={i}>
              {`${capitalize(field)}:`}
              <input
                value={user[field]}
                onChange={(e) => handleFieldChange(e.target.value, field)}
              />
            </label>
          );
        })}

        <button onClick={handleLogin}>Login</button>
      </div>

      <div>
        <Link to="/user">user</Link>
      </div>
    </div>
  );
};

export default LoginComponent;
