import Link from "next/link";
import { useContext } from "react";
import { useRef, useState, useEffect } from "react";
import HomeWrapper from "@hoc/home-wrapper";
import { get } from "lodash";
import { IFrame } from "@organisms/o-Iframe";
import { useRouter } from "next/router";
import { IFrameRouterContext } from "@lib/plugin-logic/plugin-context";

const IFrameActions = {
  NAVIGATION: "NAVIGATION",
  REFRESH: "REFRESH",
};

function Home() {
  const iframeRouterContext = useContext(IFrameRouterContext);

  useEffect(() => {
    setTimeout(() => {
      console.log("hi i ran not on index");
      iframeRouterContext.sendCookie();
      // sendMessage();
    }, 2000);
  }, []);

  return (
    <div className="w-full  ">
      <IFrame />
    </div>
  );
}

export default HomeWrapper(Home);
