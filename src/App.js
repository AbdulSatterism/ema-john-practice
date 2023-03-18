import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import Main from './Layout/Main';
import { productAndCartAdd } from './Loaders/productAndCartAdd';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: productAndCartAdd,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRoutes>
            <Inventory></Inventory>
          </PrivateRoutes>
        },
        {
          path: '/shipping',
          element: <PrivateRoutes>
            <Shipping></Shipping>
          </PrivateRoutes>
        },

        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        { path: '/about', element: <About></About> },
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
