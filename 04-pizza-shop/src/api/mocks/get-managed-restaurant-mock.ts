import { http, HttpResponse } from "msw";
import type { GetManagedRestaurantResponse } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant", () => {
  return HttpResponse.json({
    name: "Pizza Shop",
    id: "custom-restaurant-id",
    createdAt: new Date(),
    updatedAt: null,
    description: "Custom restaraunt description.",
    managerId: "custom-user-id",
  });
});
