import React, { useContext } from "react";
import { IFrameRouterContext } from "@lib/plugin-logic/plugin-context";

// Always mounted!
// Not always visible.
export const IFrame = () => {
  const iframeRouterContext = useContext(IFrameRouterContext);
  // @ts-ignore
  const { iframeVisibility, iframeRef, iframeSrc } = iframeRouterContext;
  console.log("from iframe", iframeSrc);
  return (
    <div className="iframe-container">
      <iframe
        src={iframeSrc}
        ref={iframeRef}
        title={"inside"}
        className={
          !iframeVisibility
            ? "iframe-invisible"
            : "iframe-container w-full h-[100vh]"
        }
      ></iframe>
    </div>
  );
};
