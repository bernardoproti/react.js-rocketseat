import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { OrderStatus } from "./order-status";

describe("Order Status", () => {
  it("should display the right text based on order status", () => {
    render(<OrderStatus status="pending" />);

    expect(screen.getByText("Pendente")).toBeInTheDocument();
  });
});
