import { useContext } from "react";
import { CartContext } from "./context";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [cart] = useContext(CartContext); //doing this because i dont need the setter

  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Padre Gino's Pizza</h1>{" "}
      </Link>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
