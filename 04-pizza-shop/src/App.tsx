import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import { router } from "./routes";

export function App() {
  return (
    <>
      <ThemeProvider storageKey="pizzshop-theme" defaultTheme="dark">
        <Toaster richColors closeButton />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
