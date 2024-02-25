import { useNavigate } from "react-router-dom";
import { useAuth } from "./FakeAuthContext";
import styled from "styled-components";

// const FAKE_USER = {
//   name: "Jack",
//   email: "jack@example.com",
//   password: "qwerty",
//   avatar: "https://i.pravatar.cc/100?u=zz",
// };

const Div = styled.div`
  /* position: absolute;
  top: 4.2rem;
  right: 4.2rem; */
  background-color: var(--color-dark--1);
  padding: 1rem 1.4rem;
  border-radius: 7px;
  z-index: 999;
  box-shadow: 0 0.8rem 2.4rem rgba(36, 42, 46, 0.5);
  font-size: 1.6rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  & img {
    border-radius: 100px;
    height: 4rem;
  }
  & button {
    background-color: var(--color-dark--2);
    border-radius: 7px;
    border: none;
    padding: 0.6rem 1.2rem;
    color: inherit;
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  if (!user) return; //!

  return (
    <Div>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </Div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
