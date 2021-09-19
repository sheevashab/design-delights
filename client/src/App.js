import "./App.css";
import Navbar from "./components/Navbar";
import ArtList from "./components/art/ArtList";
import ArtDetail from "./components/art/ArtDetail";
import ArtPost from "./components/art/ArtPost";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
      </Route>

      <Route exact path="/art">
        <ArtList />
        <div clasName="Links"></div>
      </Route>

      <Route exact path="/art/:id">
        <ArtDetail />
      </Route>

      <Route path="/new">
        <ArtPost />
      </Route>
    </div>
  );
}

export default App;
