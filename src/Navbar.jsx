function Navbar({ cartCount }) {
    return (
      <nav className="navbar">
        <h1>FakeStore</h1>
        <div className="cart">
          <span>🛒</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  