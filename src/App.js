import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/Inventorig/About/About';
import Inventorig from './components/Inventorig/Inventorig';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main';
import { ProductAndCL } from './ProductAndCL/ProductAndCL';
  
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/Orders',
          loader: ProductAndCL,
          element: <Orders></Orders>
        },
        {
          path: '/Inventory',
          element: <Inventorig></Inventorig>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
