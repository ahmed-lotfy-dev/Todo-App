import z from "zod";
import { db } from "../db/db";
import bcrypt from "bcrypt";

export const signUpSchema = z
  .object({
    name: z.string().min(5, { message: "Name is min 5 character" }),
    email: z
      .string()
      .min(5, { message: "Email field has to be filled." })
      .email("This is not a valid email")
      .refine(async (value) => {
        const user = await db.user.findFirst({ where: { email: value } });
        console.log(user);
        if (user) return false;
        if (!user) return true;
      }, "User allready exist"),
    password: z.string().min(4),
    cPassword: z.string().min(4),
  })
  .refine((data) => data.password === data.cPassword, {
    message: "Password and confirm password doesn't match",
    path: ["cPassword"], // path of error
  });

export const signInSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Email field has to be filled." })
    .email("This is not a valid email"),
  password: z
    .string()
    .min(4, { message: "Password cannot be empty and min 5 character" }),
});
