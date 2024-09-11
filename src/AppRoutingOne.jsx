import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/404/NotFoundPage";
import { AboutPage } from "./pages/about-faqs/AboutPage";


function AppRoutingOne() {
  return (
    <>
    {/* Router: Define a set of routes */}
      <Router>
        <div>
          <aside>
            <Link to={'/'}> | HOME |</Link>
            <Link to={'/about'}> | ABOUT |</Link>
            <Link to={'/faqs'}> | FAQs |</Link>
          </aside>

          <main>
            {/* Switch: the set of routes is expected (deprecated) use Routes instead*/}
            <Routes>
              {/* if there is any route that is exact, load the route */}
              <Route path="/" Component={ HomePage }/>
              <Route path="/about" Component={ AboutPage } />
              <Route path="/faqs" Component={ AboutPage } />
              {/* otherwise, load another route */}
              <Route path={'*'} Component={ NotFoundPage }/>
            </Routes>
          </main>
        </div>
      </Router>
    </>
  )
}

export default AppRoutingOne;
