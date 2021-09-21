import "./App.css";
import Navbar from "./components/Navbar";
import ArtList from "./components/art/ArtList";
import ArtDetail from "./components/art/ArtDetail";
import ArtPost from "./components/art/ArtPost";
import EmailSubmit from "./components/EmailSubmit";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-red-50 h-screen">
      <Navbar />

      <Route exact path="/">
        <img className="mx-auto w-4/5 mt-8" src="https://orleyshabahang.com/wp-content/uploads/bb-plugin/cache/F295_Hadas_111KaneSt-min-scaled-square.jpg" alt="interior view of curated living room" />
        <p className="mt-8 text-center text-xl text-gray-700 font-semibold">
          Welcome to Design Delights!</p>
        <p className="mt-4 ml-8 mr-8 text-center text-l text-gray-700 font-light leading-relaxed">
          This is an interactive blog where you, the user, can stop by to gain a little inspo or to give a little inspo. </p>
        <div className="mt-8 text-center">
          <EmailSubmit />
        </div>
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

    </div >
  );
}

export default App;
