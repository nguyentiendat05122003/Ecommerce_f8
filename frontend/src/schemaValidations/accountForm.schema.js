import { z } from "zod";

export const AccountBody = z
  .object({
    email: z.string().min(1, { message: "Trường này bắt buộc" }).email(),
    password: z
      .string()
      .min(1, { message: "Trường này bắt buộc" })
      .min(6, { message: "Mật khẩu tối thiểu 6 kí tự" })
      .max(100, { message: "Mật khẩu tối đa 100 kí tự" }),
    confirmPassword: z
      .string({ required_error: "Trường này bắt buộc" })
      .min(1, { message: "Trường này bắt buộc" })
      .min(6, { message: "Mật khẩu tối thiểu 6 kí tự" })
      .max(100),
    role: z.string().min(1, { message: "Trường này bắt buộc" }),
  })

  .strict();
