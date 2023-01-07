/* eslint-disable @next/next/no-page-custom-font */
import type { NextPageContext } from "next";
import { IFrame } from "@organisms/o-Iframe";
import { Navigation } from "@molecules/navigation";

function withWrapper(WrappedComponent: any) {
  const withThing = (props: any) => {
    return (
      <div className="font-theme">
        <main className="min-h-[100vh] w-full">
          <Navigation />
          <WrappedComponent {...props} />
        </main>
      </div>
    );
  };

  withThing.getInitialProps = async ({ req }: NextPageContext) => {
    const host = req?.headers;
    return { host };
  };

  return withThing;
}
export default withWrapper;

{
  /* <div className="flex items-center justify-between h-5 w-full bg-slate-500 px-3 py-3">
<button onClick={() => sendMessage()}>send message to child</button>
<div className="">from child peddlesoft: {recievedMessage}</div>
<button
  onClick={() => {
    setNavArray("https://preeminent-zuccutto-747fd5.netlify.app");
    sendMessage();
  }}
>
  to home
</button>

<button
  onClick={() => {
    setNavArray(
      "https://preeminent-zuccutto-747fd5.netlify.app/template-a"
    );
    sendMessage();
  }}
>
  to template a
</button>
<button
  onClick={() => {
    setNavArray(
      "https://preeminent-zuccutto-747fd5.netlify.app/template-b"
    );
    sendMessage();
  }}
>
  to template b
</button>
</div> */
}
