import './sass/main.scss';
import Header from './layout/Header';
import SectionAbout from './layout/SectionAbout';
import SectionServices from './layout/SectionServices';
import Footer from './layout/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <SectionAbout />
      <SectionServices />
      <Footer />
    </div>
  );
};
