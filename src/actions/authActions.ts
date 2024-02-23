"use server";

import { db } from "@/src/lib/db/db";
import { signUpSchema, signInSchema } from "../lib/schemas/userSchema";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { sessionOption, SessionData, defaultSession } from "../lib/session";
import { getIronSession } from "iron-session";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};

const key = new TextEncoder().encode(process.env.SECRET_KEY);

export const signUp = async (state: any, formData: FormData) => {
  const session = await getSession();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const cPassword = formData.get("cPassword") as string;

  const result = await signUpSchema.safeParseAsync({
    name,
    email,
    password,
    cPassword,
  });
  if (!result.success) {
    return { success: false, error: result.error.format() };
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await db.user.create({
    data: { name, email, password: hashPassword },
  });
  session.name = user.name as string;
  session.email = user.email;
  session.isLoggedIn = true;
  session.userId = user.id;
  session.role = user.role;
  session.verified = user.isVerified;
  await session.save();
  redirect("/");
};

export const login = async (state: any, formData: FormData) => {
  const session = await getSession();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user = await db.user.findFirst({ where: { email } });
  const result = await signInSchema.safeParseAsync({ email, password });
  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  const isPasswordMatch = await bcrypt.compare(
    password,
    user?.password as string
  );
  if (!isPasswordMatch) {
    return { success: false, message: "Invalid credentials" };
  }
  session.isLoggedIn = true;
  session.userId = user?.id;
  session.email = user?.email;
  session.verified = user?.isVerified;
  session.role = user?.role;
  session.name = user?.name as string;

  await session.save();
  redirect("/");

  return { success: true, message: "Login successful." };
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/login");
};
