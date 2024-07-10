import {RouterProvider, createBaseRouter, createBrowserRouter} from 'react-router-dom';

import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import Portfolio, {loader as portfolioLoader} from './Pages/Portfolio';
import Portfolio_Details from './Pages/Portfolio_Detail'
import Services, {loader as serviceLoader} from './Pages/Services';
import ErrorPage from './Pages/ErrorPage';
import {loader as portLoader } from './Pages/Portfolio_Detail';
import './App.css';
import Root from './Pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element:<HomePage/>},
      {path:'aboutus', element:<AboutUs/>},
      {path:'contactus', element:<ContactUs/>},
      {path:'login', element:<LoginPage/>},
      {path:'portfolio', element:<Portfolio_Details/>, loader:portLoader, id:'company-portfolio'},
      {path:'portfolio/:pId', element:<Portfolio/>, loader:portfolioLoader, id: 'good-detail'},
      {path:'services', element:<Services/>, loader: serviceLoader},

    ]
  }


])




function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
