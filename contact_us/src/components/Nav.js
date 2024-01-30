function Nav() {
  return (
    <nav container>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="brand_logo" />
      </div>

      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li className="active" href="#">Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
