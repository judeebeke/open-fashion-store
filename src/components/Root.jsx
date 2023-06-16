import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      {navigation.state === 'loading' && console.log("Loading...")}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
