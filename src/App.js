import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieGrid from "./components/MovieGrid";
import WatchList from "./components/WatchList";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watch List</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MovieGrid />}></Route>
            <Route path="/watchlist" element={<WatchList />}></Route>
          </Routes>
        </Router>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
