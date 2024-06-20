import {useRoutes} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer'
import Main from './Main'
import './App.css';
import Catalog from "./Catalog";
import Feedback from "./Feedback";
import About from "./AboutComponent";
import Delivery from "./DeliveryComponent";

function App() {

  const element = useRoutes([
    {
      path: '/',
      element: <Main/>
    },
    {
      path: '/catalog',
      element: <Catalog/>
    },
    {
      path: '/feedback',
      element: <Feedback/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/delivery',
      element: <Delivery/>
    }
  ])

  return (
    <>
    <Header/>
      {element}
    <Footer/>
    </>
  );
}

export default App;
