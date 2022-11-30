// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './components/App'
// import './styles/index.css'

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <App />
    
// //   </React.StrictMode>
// // )

// // const app=<App/>

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(app);

// ReactDOM.render(<App/>,document.getElementById('root'))

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "",
    element: <Home/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/about-me",
    element: <About/>,
  },
  {
    path: "/education",
    element: <Education/>,

  },
    {
        path: "/experience",
        element: <Experience/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>

  //   <RouterProvider router={router} />
  // </React.StrictMode>
);