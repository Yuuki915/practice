import React from "react";

export default function Navbar() {
  const navbar = [
    "Browse All",
    "NEW",
    "SALE",
    "OUTER",
    "TOPS",
    "BOTTOMS",
    "DRESSES",
    "MEN",
    "ACC",
    "SET",
    "PJs",
    "19.99",
    "Fast delivery",
    "CONTACT",
    "More",
  ];

  return (
    <nav className="navbar">
      <ul className="navMenu">
        {navbar.map((menu) => (
          <a href="/">
            <li className="menu">{menu}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
