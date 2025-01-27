// Outlet: Renders the matching child route of a parent route or nothing if no child route matches. 
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
     <>
       <nav>
        <span className='text-4xl text-primary'>Comfy</span>
       </nav>
       <Outlet />
     </>
    );
  };
  
  export default HomeLayout;