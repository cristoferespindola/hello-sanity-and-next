import Link from "next/link";

import "./styles.css";

const Menu = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <div className="u-sheet">
            <Link href="#">
              <li>Home</li>
            </Link>
            <Link href="/depoimentos">
              <li>Depoimentos</li>
            </Link>
            <Link href="#">
              <li>Info</li>
            </Link>
            <Link href="#">
              <li>Contact</li>
            </Link>
            <Link href="https://erikterwan.com/" target="_blank">
              <li>Show me more</li>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
