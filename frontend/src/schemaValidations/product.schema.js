import { z } from "zod";

export const ProductBody = z.object({
  name: z.string().min(1, { message: "Trường này bắt buộc" }),
  price: z.string().min(1, { message: "Trường này bắt buộc" }),
  size: z.string().min(1, { message: "Trường này bắt buộc" }),
  material: z.string().min(1, { message: "Trường này bắt buộc" }),
  battery: z.string().min(1, { message: "Trường này bắt buộc" }),
  chargeCapacity: z.string().min(1, { message: "Trường này bắt buộc" }),
  os: z.string().min(1, { message: "Trường này bắt buộc" }),
  launchTime: z.string().min(1, { message: "Trường này bắt buộc" }),
  keyboard_backlight: z.string().min(1, { message: "Trường này bắt buộc" }),
  desc: z.string(),
  brand: z.string(),
  typeProduct: z.string(),
  cpu: z.string(),
  disk: z.string(),
  ram: z.string(),
  screen: z.string(),
  typeBrand: z.string(),
  specialFeatures: z.string(),
});
