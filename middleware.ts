import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./src/actions/authActions";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.redirect("/login");
  }
  return response;
}

export const config = {
  matcher: "/((?!api|_next|favicon.ico).*)",
};
