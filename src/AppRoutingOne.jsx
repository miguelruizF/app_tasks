import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/404/NotFoundPage";
import { AboutPage } from "./pages/about-faqs/AboutPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { TaskPage } from "./pages/tasks/TaskPage";
import { TaskDetailPage } from "./pages/tasks/TaskDetailPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { useEffect } from "react";
import { PropsPage } from "./pages/home/PropsPage";


function AppRoutingOne() {

  let logged = true;
  // let params = useParams();
  const taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My First Ask'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My Second Ask'
    }
  ];

  useEffect(() => {
    let logged = localStorage.getItem('credentials');
    console.log('user logged?', logged);
  }, []);
  

  return (
    <>
    {/* Router: Define a set of routes */}
      <Router>
        <div>
          <aside>
            <Link to={'/'}> | HOME |</Link>
            <Link to={'/about'}> | ABOUT |</Link>
            <Link to={'/profile'}> | PROFILE |</Link>
            <Link to={'/faqs'}> | FAQs |</Link>
            <Link to={'/task/1'}> | Task 1 |</Link>
            <Link to={'/task/2'}> | Task 2 |</Link>
            <Link to={'/any404'}> | No Existing Route |</Link>
            <Link to={'/login'}> | Login |</Link>
          </aside>

          <main>
            {/* Switch: the set of routes is expected (deprecated) use Routes instead*/}
            <Routes>
              {/* if there is any route that is exact, load the route */}
              <Route path="/" Component={ HomePage }/>
              {/* State page */}
              <Route path="/online-state" Component={ PropsPage }/>
              <Route path="/login" element={ 
                logged ? <HomePage/> : <LoginPage />
              }/>
              <Route path="/about" Component={ AboutPage } />
              <Route path="/profile" element={ 
                  logged ? <ProfilePage/> : <Navigate replace to={'/login'}/>
                } />
              <Route path="/faqs" Component={ AboutPage } />
              <Route path="/tasks" Component={ TaskPage } />
              <Route path="/task/:id" element={ <TaskDetailPage tasks={taskList}/> } />
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
