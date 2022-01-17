import "./App.css";
import products from "./products";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  console.log(products);
  return (
    <div>
      <Home></Home>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
