import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { NotFoundPage } from "./pages/404/NotFoundPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { HomePage } from "./pages/home/HomePage";

function AppRoutingFinal() {
  //TODO: Change to value from sessionStorage
  const logged = true;

  return (
    <>
      <Router>
        <Routes>
          {/* Redirections to protect our routes */}
          <Route path="/" element={
            logged ? <Dashboard/> : <LoginPage/>
          }/>
          {/* Login Route */}
          <Route exact path="/login" element={ <LoginPage/> }/>
          {/* Dashboard Route */}
          <Route path="/dashboard" element={
            logged ? <Dashboard/> : <LoginPage/>
          }/>
          <Route path="*" element={ <NotFoundPage/> }/>
        </Routes>
      </Router>
    </>
  )
}


export default AppRoutingFinal;
