import MainPage from "./components/MainPage/MainPage";
import Cart from "./components/Cart/Index";
import "../styles/fonts.css";

export default function Home() {
  return (
    <div className="font-yekan">
      <MainPage />
      <Cart />
    </div>
  );
}
