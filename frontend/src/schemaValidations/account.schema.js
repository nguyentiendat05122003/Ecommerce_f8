import { z } from "zod";

export const ProfileBody = z
  .object({
    email: z.string().min(1, { message: "Trường này bắt buộc" }).email(),
    name: z.string().min(1, { message: "Trường này bắt buộc" }),
    phone: z.string(),
    address: z.string(),
    // image: z.string(),
    // password: z
    //   .string()
    //   .min(1, { message: "Trường này bắt buộc" })
    //   .min(6, { message: "Mật khẩu tối thiểu 6 kí tự" })
    //   .max(100, { message: "Mật khẩu tối đa 100 kí tự" }),
  })
  .strict();
