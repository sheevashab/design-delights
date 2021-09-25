import "./App.css";
import Navbar from "./components/Navbar";
import PostButtons from "./components/PostButtons";
import EmailSubmit from "./components/EmailSubmit";
import Footer from "./components/Footer"
import ArtList from "./components/art/ArtList";
import ArtDetail from "./components/art/ArtDetail";
import ArtPost from "./components/art/ArtPost";
import FashionList from "./components/fashion/FashionList";
import FashionDetail from "./components/fashion/FashionDetail";
import FashionPost from "./components/fashion/FashionPost";
import InteriorsList from "./components/interiors/InteriorsList";
import InteriorsDetail from "./components/interiors/InteriorsDetail";
import InteriorsPost from "./components/interiors/InteriorsPost"
import ArchitectureList from "./components/architecture/ArchitectureList";
import ArchitectureDetail from "./components/architecture/ArchitectureDetail";
import ArchitecturePost from "./components/architecture/ArchitecturePost";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div id="app" className="h-screen w-full overflow-auto">
      <Navbar />
      <div className="flex flex-col min-h-screen justify-between">
        <Switch>
          <Route exact path="/">
            <img className="mx-auto w-4/5 max-w-lg mt-8 lg:w-1/2 xl:max-w-4xl"
              src="https://orleyshabahang.com/wp-content/uploads/bb-plugin/cache/F295_Hadas_111KaneSt-min-scaled-square.jpg"
              alt="interior view of curated living room" />

            <p className="mt-8 text-center text-2xl text-gray-700 font-semibold">
              Welcome to Design Delights!</p>
            <p className="mt-4 ml-8 mr-8 text-center text-l text-gray-700 font-light leading-relaxed">
              Our interactive blog allows you, the user, a platform to gain a little inspo or to give a little inspo.</p>

            <div>
              <PostButtons />
            </div>

            <div>
              <EmailSubmit />
            </div>
          </Route>

          <Route exact path="/art">
            <ArtList />
          </Route>

          <Route exact path="/art/new">
            <ArtPost />
          </Route>

          <Route exact path="/art/:id">
            <ArtDetail />
          </Route>


          <Route exact path="/fashion">
            <FashionList />
          </Route>

          <Route exact path="/fashion/new">
            <FashionPost />
          </Route>

          <Route exact path="/fashion/:id">
            <FashionDetail />
          </Route>

          <Route exact path="/interiors">
            <InteriorsList />
          </Route>

          <Route exact path="/interiors/new">
            <InteriorsPost />
          </Route>

          <Route exact path="/interiors/:id">
            <InteriorsDetail />
          </Route>

          <Route exact path="/architecture">
            <ArchitectureList />
          </Route>

          <Route exact path="/architecture/new">
            <ArchitecturePost />
          </Route>

          <Route exact path="/architecture/:id">
            <ArchitectureDetail />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div >
  );
}

export default App;
