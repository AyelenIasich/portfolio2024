import React from "react";

function NavItem({ itemName, itemLink }) {
  return (
    <li className="nav-item pt-1">
      <a className="nav-link" aria-current="page" href={itemLink}>
        {itemName}
      </a>
    </li>
  );
}

export default NavItem;
