import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: number;
  name?: string;
  email?: string;
  verified?: boolean;
  role?: string;
  token?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOption: SessionOptions = {
  password: process.env.SECRET_KEY as string,
  cookieName: "session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
