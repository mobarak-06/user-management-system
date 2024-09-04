import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllUser from './AllUser.jsx';
import AddUser from './AddUser.jsx';
import UserDetails from './UserDetails.jsx';
import UpdateUser from './UpdateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllUser/>,
  },
  {
    path: "/addUser",
    element: <AddUser/>
  },
  {
    path: "/userDetails",
    element: <UserDetails/>
  },
  {
    path: "/updateUser/:id",
    element: <UpdateUser/>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
