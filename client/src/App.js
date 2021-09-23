import "./App.css";
import Navbar from "./components/Navbar";
import ArtList from "./components/art/ArtList";
import ArtDetail from "./components/art/ArtDetail";
import ArtPost from "./components/art/ArtPost";
import EmailSubmit from "./components/EmailSubmit";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-full overflow-auto">

      <Navbar />

      <Route exact path="/">
        <img className="mx-auto w-4/5 max-w-lg mt-8 lg:w-auto xl:max-w-4xl"
          src="https://orleyshabahang.com/wp-content/uploads/bb-plugin/cache/F295_Hadas_111KaneSt-min-scaled-square.jpg"
          alt="interior view of curated living room" />

        <p className="mt-8 text-center text-2xl text-gray-700 font-semibold">
          Welcome to Design Delights!</p>
        <p className="mt-4 ml-8 mr-8 text-center text-l text-gray-700 font-light leading-relaxed">
          Our interactive blog allows you, the user, a platform to gain a little inspo or to give a little inspo. </p>

        <p className="mt-8 text-center text-xl text-gray-700 font-semibold">
          Get Started</p>
        <Link to='/new'>
          <div className="flex justify-center">
            <button className="btn btn-outline text-gray-700 text-center mt-4 font-bold">
              Add Your Art</button>
          </div>
        </Link>

        <div>
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
