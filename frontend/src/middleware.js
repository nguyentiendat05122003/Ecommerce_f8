import { NextResponse } from "next/server";

const privatePaths = [""];
const authPaths = ["/login", "/register"];
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("accessToken")?.value;
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register"],
};
