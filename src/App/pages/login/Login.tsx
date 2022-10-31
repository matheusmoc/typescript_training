import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import InputLogin from "./components/InputLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  
  const emailLength = useMemo(()=>{  //evita fazer calculos complexos várias vezes
    return email.length * 1000;
  }, [email.length]);

  // //executa somente quando o componente for carregado somente uma vez
  // useEffect(() => {
  //   console.log(email);
  // }, [email]); //a função será executada toda vez que o email e a senha for alterada

  // useEffect(() => {
  //   console.log(password);
  // }, [password]);

  const handleSignIn = useCallback(()=>{ //guarda a função em memoria
    console.log(email);
    console.log(password);

    if (inputPasswordRef.current !== null) {
      inputPasswordRef.current.focus();
    }

  }, [email, password]);


  return (
    <div>
      <form>
        <p>Quantidade de caracters no email: {emailLength}</p>
        <div>
          <InputLogin 
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={()=>inputPasswordRef.current?.focus()}
          />
          {/* <label>
            <span>Email</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
            />
          </label> */}
        </div>

        <div>
        <InputLogin 
        type="password"
        label="Senha"
        value={password}
        ref={inputPasswordRef}
        onChange={(newValue) => setPassword(newValue)}
        />
          {/* <label>
            <span>Password</span>
            <input
            ref={inputPasswordRef }
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label> */}
        </div>

        <button type="button" onClick={handleSignIn}>
          Sign in
        </button>
      </form>
    </div>
  );
};
