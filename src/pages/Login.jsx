import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "./login/FakeAuthContext";

const Form = styled.form`
  background-color: #42484d;
  border-radius: 7px;
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* Different from other form */
  width: 48rem;
  margin: 8rem auto;
`;

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    if ((email, password)) login(email, password);
  }

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </Form>
    </main>
  );
}
