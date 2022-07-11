import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="Navigation">
      <ul>
        <li>
          <a
            onClick={() => {
              onRouteChange("signin");
            }}
            className="link-anchor"
            href="{}"
          >
            Sign Out
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
