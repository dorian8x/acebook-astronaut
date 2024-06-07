import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authentication";
import { notEmpty } from "../../../../api/utils/fieldValidator";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fields = [email, password]

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      fields.forEach(field => {
        notEmpty(field);
      })
    } catch (err) {
      alert(err)
    }

    try {
      const data = await login(email, password);
      const token = data.token;
      const user_id = data.id;
      localStorage.setItem("token", token);
      localStorage.setItem("user_id", user_id);
      navigate("/posts");
    } catch (err) {
      alert(err);
      navigate("/login");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <h2>Log in to your account</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="email">Email:</label>
        <input
          placeholder="Email"
          id="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
          placeholder="Password"
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        </div>
        <div>
        <input role="submit-button" id="submit" type="submit" value="Submit" className = "button"/>
        </div>
      </form>
    </>
  );
};
