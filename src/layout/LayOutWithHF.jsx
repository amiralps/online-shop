import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
function LayOutWithHF({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default LayOutWithHF;
