import { useContext } from "react";
import { CartContext } from "./context";

export default function Header() {
  const [cart] = useContext(CartContext); //doing this because i dont need the setter

  return (
    <nav>
      <h1 className="logo">Padre Gino's Pizza</h1>{" "}
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
