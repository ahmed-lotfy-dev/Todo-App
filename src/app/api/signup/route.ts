import { db } from "@/src/lib/db";

// export async function GET(request: Request) {
//   console.log(request.json());
//   return Response.json("hello world");
// }
// const name = formData.get("name") as string;
// const email = formData.get("email") as string;
// const password = formData.get("password") as string;
// const cPassword = formData.get("cPassword") as string;
// console.log({ name, email, password, cPassword });
// if (!name) return { message: "please provide your name" };
// if (password !== cPassword)
//   return Response.json({
//     message: "password and confirm password not match",
//   });
// const userExist = await db.user.findFirst({ where: { email } });
// if (userExist) Response.json({ message: "user allready exist" });
// const newUser = await db.user.create({ data: { name, email, password } });
// return Response.json({ message: "signup successfull" });
// }

import type { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  const res = await fetch("https://fakestoreapi.com/products", {});
  const data = await res.json();

  return Response.json({ data });
}
