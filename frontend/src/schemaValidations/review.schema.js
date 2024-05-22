import { z } from "zod";

export const ReviewBody = z.object({
  review: z.string().min(1, { message: "Trường này bắt buộc" }),
  rating: z.number(),
});
