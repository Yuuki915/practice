import React from "react";
import { MySidebarData } from "./MySidebarData";

function MySidebar() {
  return (
    <div className="Sidebar">
      {/* <MySidebarIcon /> */}
      <ul className="SidebarList">
        {MySidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MySidebar;
