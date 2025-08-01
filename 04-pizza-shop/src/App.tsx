import "@/index.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { queryClient } from "@/lib/react-query";
import { router } from "@/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

export function App() {
  return (
    <>
      <ThemeProvider storageKey="pizzshop-theme" defaultTheme="dark">
        <Toaster richColors closeButton />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
