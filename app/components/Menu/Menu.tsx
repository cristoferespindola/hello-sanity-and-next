"use client";
import Link from "next/link";

import "./styles.css";
import { useRef } from "react";

const Menu = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleMenuClick = () => {
    if (ref?.current) {
      ref.current.checked = !ref.current.checked;
    }
  };

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" ref={ref} />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <div className="u-sheet">
            <Link href="#" onClick={handleMenuClick}>
              <li>Home</li>
            </Link>
            <Link href="/depoimentos" onClick={handleMenuClick}>
              <li>Depoimentos</li>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
