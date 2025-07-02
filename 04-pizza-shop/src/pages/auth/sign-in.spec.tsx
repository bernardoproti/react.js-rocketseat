import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { SignIn } from "./sign-in";

describe("SignIn", () => {
  it("should set default email input value if email is present on search params", () => {
    render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter
            initialEntries={["/sign-in?email=bernardoproti@gmail.com"]}
          >
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MemoryRouter>
        );
      },
    });

    expect(screen.getByLabelText<HTMLInputElement>("Seu e-mail").value).toEqual(
      "bernardoproti@gmail.com"
    );
  });
});
