import { http, HttpResponse } from "msw";
import type { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      name: "John Doe",
      id: "custom-user-id",
      email: "johndoe@example.com",
      phone: "27999213999",
      role: "manager",
      createdAt: new Date(),
      updatedAt: null,
    });
  }
);
