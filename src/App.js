import React from 'react';
import Home from './components/Home/Home';
import * as ReactDOM from "react-dom/client";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import NotFound from './components/NotFound/NotFound';
import CountryDetail from './components/CountryDetail/CountryDetail';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/Home/",
      element:<Home/>
      
    },


    {
      path:"/Details/:countryName",
      element:<CountryDetail/>
    },
    


    {
      path:"/",
      element:<Home/>

    },

   
    

    {
      path:"*",
      element:<NotFound></NotFound>
    }
])
 

  return (
    <div>
    
    <RouterProvider router={router} />
    </div>
  );
};

export default App;