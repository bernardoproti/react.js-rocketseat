import { http, HttpResponse } from "msw";
import type {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../get-order-details";
import { orders } from "./get-orders-mock";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  const order = orders.find(order => order.orderId === params.orderId);

  if (order) {
    return HttpResponse.json({
      id: order.orderId,
      customer: {
        name: order.customerName,
        email: "johndoe@example.com",
        phone: "27999213999",
      },
      status: order.status,
      createdAt: order.createdAt.toISOString(),
      totalInCents: order.total,
      orderItems: [
        {
          id: "order-item-1",
          priceInCents: 1200,
          product: { name: "Pizza Pepperoni" },
          quantity: 1,
        },
        {
          id: "order-item-2",
          priceInCents: 600,
          product: { name: "Pizza Marguerita" },
          quantity: 2,
        },
      ],
    });
  }
});
