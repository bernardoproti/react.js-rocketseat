import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { OrderStatus } from "./order-status";

describe("Order Status", () => {
  it("should display the right text when order status is pending", () => {
    render(<OrderStatus status="pending" />);

    expect(screen.getByText("Pendente")).toBeInTheDocument();
    expect(screen.getByTestId("badge")).toHaveClass("bg-slate-400");
  });

  it("should display the right text when order status is canceled", () => {
    render(<OrderStatus status="canceled" />);

    expect(screen.getByText("Cancelado")).toBeInTheDocument();
    expect(screen.getByTestId("badge")).toHaveClass("bg-rose-500");
  });

  it("should display the right text when order status is delivering", () => {
    render(<OrderStatus status="delivering" />);

    expect(screen.getByText("Em entrega")).toBeInTheDocument();
    expect(screen.getByTestId("badge")).toHaveClass("bg-amber-500");
  });

  it("should display the right text when order status is processing", () => {
    render(<OrderStatus status="processing" />);

    expect(screen.getByText("Em preparo")).toBeInTheDocument();
    expect(screen.getByTestId("badge")).toHaveClass("bg-amber-500");
  });

  it("should display the right text when order status is delivered", () => {
    render(<OrderStatus status="delivered" />);

    expect(screen.getByText("Entregue")).toBeInTheDocument();
    expect(screen.getByTestId("badge")).toHaveClass("bg-emerald-500");
  });
});
