// Outlet: Renders the matching child route of a parent route or nothing if no child route matches. 
import { Outlet, useNavigation } from 'react-router-dom';
import { Header, NavBar, Loading } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <NavBar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className='align-element py-20'>
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;