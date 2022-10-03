import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignIn = () => {
    // console.log(email)
    // console.log(password)
    
  };
  return (
    <div>
      <form action="">
        <label>
          <span>Email</span>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Password</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>

        <button type="button" onClick={handleSignIn}>
          Sign in
        </button>
      </form>
    </div>
  );
};
