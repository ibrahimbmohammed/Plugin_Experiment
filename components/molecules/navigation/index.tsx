import React, { useContext } from "react";
import { IFrameRouterContext } from "@lib/plugin-logic/plugin-context";
import { NAVIGATION_ROUTES } from "@lib/plugin-logic/plugin-nav-items";
// Used "/app" prefix to avoid duplicate routes from the inner IFrame and the parent hosting application

// Render the navigation navbar.
export const Navigation = () => {
  const iframeRouterContext = useContext(IFrameRouterContext);

  return (
    <div className="navigation">
      <ul className="flex items-center justify-between h-5 w-full bg-slate-500 px-3 py-3">
        {NAVIGATION_ROUTES?.main.map((route) => {
          return (
            <li
              key={route.title}
              onClick={() => {
                iframeRouterContext.navigate(route);
              }}
            >
              {route.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
