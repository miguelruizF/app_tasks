import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/404/NotFoundPage";


function AppRoutingOne() {
  return (
    <>
    {/* Router: Define a set of routes */}
      <Router>
        {/* Switch: the set of routes is expected (deprecated) use Routes instead*/}
        <Routes>
          {/* if there is any route that is exact, load the route */}
          <Route exact path="/" Component={HomePage}/>
          {/* otherwise, load another route */}
          <Route path={'*'} Component={NotFoundPage}/>
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutingOne;
