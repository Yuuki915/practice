import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Login } from "./Login";

export default function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await Login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
