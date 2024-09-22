import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { NotFoundPage } from "./pages/404/NotFoundPage";
import { LoginPage } from "./pages/auth/LoginPage";

function AppRoutingFinal() {

  const logged = true;

  return (
    <>
    <Router>
      <Routes>
        {/* Redirections to protect our routes */}
        <Route path="" element={
          logged ? <Dashboard/> : <LoginPage/>
        }/>
        {/* Login Route */}
        <Route exact path="/login" element={ <LoginPage/> }/>
        <Route Component={ <NotFoundPage/> }></Route>
      </Routes>
    </Router>
    <Dashboard/>
    </>
  )
}


export default AppRoutingFinal;
