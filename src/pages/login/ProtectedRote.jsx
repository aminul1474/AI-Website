import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRote({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return children;
}

export default ProtectedRote;

{
  /* <Route
path="app"
element={
  <ProtectedRote>
    <AppLayout />
  </ProtectedRote>
}
> */
}
