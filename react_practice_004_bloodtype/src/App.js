import { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import Home from "./useContext/Home";
import About from "./useContext/About";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about/" exact element={<About />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
