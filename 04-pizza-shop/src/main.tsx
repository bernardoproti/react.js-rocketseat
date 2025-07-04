import { App } from "@/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { enableMSW } from "./api/mocks";

enableMSW().then(() => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
