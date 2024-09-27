import MainPage from "./components/MainPage/MainPage";
import "../styles/fonts.css";
import AddToCartButton from "./components/Cart/AddToCartButton";
import Cart from "./components/Cart/Cart";

export default function Home() {
  return (
    <div className="font-yekan">
      <MainPage />
      <h1>My Store</h1>
      <AddToCartButton id="1" name="Product A" price={10} />
      <AddToCartButton id="2" name="Product B" price={20} />
      <Cart />
    </div>
  );
}
