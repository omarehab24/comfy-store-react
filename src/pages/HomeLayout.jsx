// Outlet: Renders the matching child route of a parent route or nothing if no child route matches. 
import { Outlet } from 'react-router-dom';
import { Header, NavBar } from '../components';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;