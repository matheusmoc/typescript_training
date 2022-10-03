import { useEffect, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    //executa domente quando o componente for carregado somente uma vez
  }, []);

  useEffect(() => {
    console.log(email);
  }, [email]); //a função será executada toda vez que o email e a senha for alterada

  useEffect(() => {
    console.log(password);
  }, [password]);

  const handleSignIn = () => {};
  return (
    <div>
      <form>
        <div>
          <label>
            <span>Email</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="button" onClick={handleSignIn}>
          Sign in
        </button>
      </form>
    </div>
  );
};
