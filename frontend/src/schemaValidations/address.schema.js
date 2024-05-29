import { z } from "zod";

export const AddressBody = z.object({
  name: z.string().min(1, { message: "Trường này bắt buộc" }),
  phone: z.string().min(1, { message: "Trường này bắt buộc" }),
  location: z.string().min(1, { message: "Trường này bắt buộc" }),
  isDefault: z.boolean(),
});
