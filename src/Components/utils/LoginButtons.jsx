const LoginButtons = ({ loggedInUser, handleLogIn }) => {
  
  return (
    <div className="login-dropdown">
      <button className="dropbtn">Logged in {loggedInUser} ↓</button>
      <div className="dropdown-content">
            <button onClick={() => handleLogIn("weegembump")}>weegembump</button>
            <button onClick={() => handleLogIn("grumpy19")}>grumpy19</button>
            <button onClick={() => handleLogIn("tickle122")}>tickle122</button>
      </div>
    </div>
  );

}
//   return (
//     <section className="login-buttons">
//       Log in ↓ {loggedInUser}
//       <button onClick={() => handleLogIn("weegembump")}>weegembump</button>
//       <button onClick={() => handleLogIn("grumpy19")}>grumpy19</button>
//       <button onClick={() => handleLogIn("tickle122")}>tickle122</button>
//     </section>
//   );
// };

export default LoginButtons;
