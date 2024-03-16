import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Offers from "./components/Offers/Offers";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductContainer />
        <Reviews />
        <Offers />
      </main>
      <Footer />
    </>
  );
}

export default App;
