import { useContext } from "react";
import { IFrame } from "@organisms/o-Iframe";
import { get } from "lodash";
import { useState, useEffect, useLayoutEffect } from "react";
import HomeWrapper from "@hoc/home-wrapper";
import { useRouter } from "next/router";
import { IFrameRouterContext } from "@lib/plugin-logic/plugin-context";

const IFrameActions = {
  NAVIGATION: "NAVIGATION",
  REFRESH: "REFRESH",
};

function TemplateTwo() {
  const iframeRouterContext = useContext(IFrameRouterContext);
  const [recievedMessage, setRecievedMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      console.log("hi i ran not on index");
      iframeRouterContext.sendCookie();
      // sendMessage();
    }, 2000);
  }, []);

  return (
    <div className="">
      <IFrame />
    </div>
  );
}

export default HomeWrapper(TemplateTwo);
