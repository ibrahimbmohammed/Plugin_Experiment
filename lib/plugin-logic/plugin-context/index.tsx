import React, { useState, useRef, useEffect, useMemo } from "react";
import { NAVIGATION_ROUTES } from "../plugin-nav-items";
// import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import useDidMountEffect from "@lib/hooks/use-did-mount-effect";
import { getCookie } from "@lib/utils/cookies";
import { useAppSelector } from "@lib/hooks/redux-hooks";

export const IFrameActions = {
  NAVIGATION: "NAVIGATION",
  COOKIE: "COOKIE",
  REFRESH: "REFRESH",
};

const initial = {};

export const IFrameRouterContext = React.createContext(initial);

export const IFRAME_APP_URL = "https://preeminent-zuccutto-747fd5.netlify.app";

export const IFrameRouterContextProvider = ({ children }) => {
  const navItemsData = useAppSelector((state) => state.navItemData);
  console.log("nav item", navItemsData);
  const iframeRef = useRef(null);
  //   const [iframeSrc, setIframeSrc] = useState('')
  //   // Important that it should only be called once.
  //   useDidMountEffect(() => {
  //     setIframeSrc(getIframeSource)
  // }, []);
  // const iframeSrc = useMemo(getIframeSource, []);

  // formerly outside //
  const getIFrameRoute = () => {
    if (window.location.pathname.includes("admin")) {
      return navItemsData?.admin?.find(
        (route) => route.displayedURL === window.location.pathname
      );
    }
    return navItemsData?.main?.find(
      (route) => route.displayedURL === window.location.pathname
    );
  };

  const isInIFrameRoute = () => {
    return !!getIFrameRoute();
  };

  const getIframeSource = () => {
    const iframeRoute = getIFrameRoute();
    if (iframeRoute) {
      return iframeRoute.iFrameUrl + iframeRoute.path;
    }

    return iframeRoute?.iFrameUrl;
  };

  // formerly outside end //

  const iframeSrc = getIframeSource();
  console.log("the source from within", iframeSrc);
  const [iframeVisibility, setIframeVisibility] = useState(isInIFrameRoute());
  // const history = useHistory();
  const router = useRouter();

  // --------------------------------------------------------------------------
  // Navigates our application, handling both parent routes, and IFrame routes.
  // Use this for all app routing.
  // It makes sure to handle IFrame visibility as well.
  // --------------------------------------------------------------------------
  const navigate = ({ path, isIFrame, displayedURL, iFrameUrl }) => {
    // Stop navigation to the same path.
    const currentPath = window.location.pathname;
    /// console.log("ins nav func", currentPath, isIFrame);
    console.log("ins nav func =============> 11111");
    if (
      (isIFrame && displayedURL === currentPath) ||
      (!isIFrame && path === currentPath)
    ) {
      return;
    }

    if (isIFrame) {
      setIframeVisibility(true);
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          {
            action: IFrameActions.NAVIGATION,
            path,
          },
          iFrameUrl
        );
        console.log("shit ==============>", path);
        //history.push(displayedURL);
        router.push(displayedURL);
      }
    } else {
      setIframeVisibility(false);
      //history.push(path);
      router.push(path);
    }
  };

  const sendCookie = (isIFrame = true) => {
    const cookievalue = getCookie("organizationId");
    if (isIFrame) {
      setIframeVisibility(true);
      if (iframeRef.current) {
        // @ts-ignore
        iframeRef.current.contentWindow.postMessage(
          {
            action: IFrameActions.COOKIE,
            organizationId: cookievalue,
          },
          IFRAME_APP_URL
        );
        //history.push(displayedURL);
        // router.push(displayedURL);
      }
    } else {
      setIframeVisibility(false);
      //history.push(path);
      // router.push(path);
    }
  };

  const handleBrowserBackForwardEvents = () => {
    // Based on currently updated URL
    if (isInIFrameRoute()) {
      if (iframeRef.current) {
        // Manually handle IFrame navigation
        setIframeVisibility(true); // You might delay this to avoid flickering of previous route in hidden iframe
        const route = getIFrameRoute();
        iframeRef.current.contentWindow.postMessage(
          {
            action: IFrameActions.NAVIGATION,
            path: route.path,
          },
          IFRAME_APP_URL
        );
      }
    } else {
      // BrowserRouter handles the navigation
      setIframeVisibility(false);
    }
  };

  const navigateToMainPage = () => {
    console.log("hi ========>");
    navigate(navItemsData?.main?.find(({ path }) => path === "/"));
  };

  useEffect(() => {
    console.log("Initial IFrame Visiblity", isInIFrameRoute());

    // Go the child application main route
    if (window.location.pathname === "/") {
      navigateToMainPage();
    }

    if (iframeRef.current) {
      console.log("the ref", iframeRef);
      // return;
      // add a safety net
      iframeRef.current.onload = () => {
        console.log("IFrame loaded");
        window.addEventListener("popstate", handleBrowserBackForwardEvents);
      };
    }
    return () => {
      window.removeEventListener("popstate", handleBrowserBackForwardEvents);
    };
  }, []);

  const contextProperties = {
    iframeRef,
    iframeVisibility,
    setIframeVisibility,
    getIFrameRoute,
    isInIFrameRoute,
    navigate,
    sendCookie,
    iframeSrc,
  };
  return (
    <IFrameRouterContext.Provider value={contextProperties}>
      {children}
    </IFrameRouterContext.Provider>
  );
};
