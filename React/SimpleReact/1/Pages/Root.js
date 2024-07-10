import NavigationBar from "../Components/Navbar"
import classes from "./styles/Root.module.css"
import Footer from "../Components/Footer"
import { Outlet } from 'react-router-dom';



function Root(){

    return (
        <>
          <NavigationBar />
          <main className={classes.bg}>
            {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
            <Outlet />
            <Footer></Footer>
          </main>
        </>
      );
    }

export default Root