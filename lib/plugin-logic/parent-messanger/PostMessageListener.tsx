import React, { useEffect } from "react";
import { IFrameActions } from "@lib/plugin-logic/plugin-context";
import { useRouter } from "next/router";
import { get } from "lodash";

// In case you want to act upon message recevied from the IFrame.
export const PostMessageListener = () => {
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("message", (event) => {
      // Accept only specific origins messages.
      // if (event.origin !==  "https://..") {
      //   console.log('Incorrect origin',event.origin);
      //   return;
      // }

      const data = get(event, "data");
      const action = get(data, "action");
      const path = get(data, "path");
      // Example of acting on a messages from the child iframe.
      if (action === IFrameActions.REFRESH) {
        window.location.reload();
      }
      if (action === IFrameActions.NAVIGATION) {
        router.push(path);
      }
    });
  }, []);

  return <></>;
};
