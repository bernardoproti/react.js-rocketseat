import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { NavLink } from "./nav-link";

describe("NavLink", () => {
  it("should highlight the nav link when the is the current page link", () => {
    render(
      <>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/orders">Orders</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>;
        },
      }
    );

    expect(screen.getByText("Dashboard").dataset.current).toEqual("true");
    expect(screen.getByText("Orders").dataset.current).toEqual("false");
  });
});
