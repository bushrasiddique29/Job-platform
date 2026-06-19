import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Home from './components/components_lite/Home';
import PrivacyPolicy from './components/components_lite/PrivacyPolicy';
import TermsOfService from './components/components_lite/TermsOfService';
import Jobs from './components/components_lite/Jobs';
import Browse from './components/components_lite/Browse';
import Profile from './components/components_lite/Profile';
import Description from './components/components_lite/Description';
import Companies from './components/adminComponent/Companies';
import CompanyCreate from './components/adminComponent/CompanyCreate';
import CompanySetup from './components/adminComponent/CompanySetup';
import AdminJobs from './components/adminComponent/AdminJobs';
import PostJob from './components/adminComponent/PostJob';
import Applicants from './components/adminComponent/Applicants';
import ProtectedRoute from './components/adminComponent/ProtectedRoute';
import About from "./components/components_lite/About";



const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: < Register/>,
  },
  {
    path: "/description/:id",
    element: <Description />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/TermsofService",
    element: <TermsOfService />,
  },
  {
    path: "/Jobs",
    element: <Jobs />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },
   {
    path:"/about",
    element:<About/>
   },
   // /admin
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <CompanyCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        <CompanySetup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        <AdminJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        <PostJob />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <Applicants />
      </ProtectedRoute>
    ),
  },
]);


const App = () => {
  return (
    <>
  <RouterProvider router={appRouter}></RouterProvider>
    </>
  )
}

export default App