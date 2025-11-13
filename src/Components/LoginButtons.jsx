import { useState } from "react";

const LoginButtons = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogIn = (user) => {
    setLoggedInUser(user);
    console.log(`Logged in as ${user}`);
  };

  return (
    <section className="login-buttons">
      Logged in as: {loggedInUser}
      <button onClick={() => handleLogIn("weegembump")}>weegembump</button>
      <button onClick={() => handleLogIn("grumpy19")}>grumpy19</button>
      <button onClick={() => handleLogIn("tickle122")}>tickle122</button>
    </section>
  );
};

export default LoginButtons;
