import Footer from './Footer';
import Header from './Header';

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
