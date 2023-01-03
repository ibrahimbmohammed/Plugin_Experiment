import { useState, useEffect } from "react";

function TemplateOne() {
  const [recievedMessage, setRecievedMessage] = useState("");
  return (
    <div className="flex flex-col space-y-10">
      <p className="text-lg h-full w-full bg-amber-700-600">
        Template donations:{recievedMessage}
      </p>{" "}
    </div>
  );
}

export default TemplateOne;
