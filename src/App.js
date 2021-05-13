import "./App.prefixed.css";
import Header from "./layout/Header";
import SectionAbout from "./layout/SectionAbout";
import SectionServices from "./layout/SectionServices";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionAbout />
      <SectionServices />
      <Footer />
    </div>
  );
}

export default App;
