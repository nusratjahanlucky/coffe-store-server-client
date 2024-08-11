import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Users from './Components/Users.jsx';
import { BASE_URL } from './utils/constants.js';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    loader:()=>fetch(`${BASE_URL}/coffe`)
  },
  {
    path:'/addCoffe',
    element:<AddCoffe></AddCoffe>
  },
  {
    path:'/updateCoffe/:id',
    element:<UpdateCoffe></UpdateCoffe>,
    loader:({params}) =>fetch(`${BASE_URL}/coffe/${params.id}`)
  },
  {
    path:'/signUp',
    element:<SignUp></SignUp>
  },
  {
    path:'/signIn',
    element:<SignIn></SignIn>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:() => fetch(`${BASE_URL}/user`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>,
)
