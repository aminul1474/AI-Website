import About from "../components/About";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Services from "../components/Services";

function Landingpage() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Services />
      <Featured />
      <Footer />
    </>
  );
}

export default Landingpage;
