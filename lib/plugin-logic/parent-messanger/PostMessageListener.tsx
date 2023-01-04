import React, { useEffect } from "react";
import { IFrameActions } from "@lib/plugin-logic/plugin-context";
import { get } from "lodash";

// In case you want to act upon message recevied from the IFrame.
export const PostMessageListener = () => {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      // Accept only specific origins messages.
      // if (event.origin !==  "https://..") {
      //   console.log('Incorrect origin',event.origin);
      //   return;
      // }
      const data = get(event, "data");
      const action = get(data, "action");
      // const message = event && event.data;
      // onst action = message && message.action;
      console.log("hello world event ===>", event?.origin);
      console.log(
        "hello world event loc===>",
        window?.location?.ancestorOrigins?.[0]
      );

      // Example of acting on a messages from the child iframe.
      if (action === IFrameActions.REFRESH) {
        window.location.reload();
      }
      if (action === IFrameActions.COOKIE) {
        console.warn("hello world", data);
      }
    });
  }, []);

  return <></>;
};
