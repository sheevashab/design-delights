import "./App.css";
import Navbar from "./components/Navbar";
import ArtList from "./components/art/ArtList";
import ArtDetail from "./components/art/ArtDetail";
import ArtPost from "./components/art/ArtPost";
import EmailSubmit from "./components/EmailSubmit";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-red-100">
      <Navbar />
      <Route exact path="/">
      </Route>

      <Route exact path="/art">
        <ArtList />
        <div className="Links"></div>
      </Route>

      <Route exact path="/art/:id">
        <ArtDetail />
      </Route>

      <Route path="/new">
        <ArtPost />
      </Route>

      <img className="mt-6 content-center" src="https://orleyshabahang.com/wp-content/uploads/bb-plugin/cache/F295_Hadas_111KaneSt-min-scaled-square.jpg" alt="interior view of curated living room" />

      <div>
        <EmailSubmit />
      </div>
    </div >
  );
}

export default App;
