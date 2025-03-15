import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Food Delivery</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;