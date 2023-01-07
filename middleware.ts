/* eslint-disable import/prefer-default-export */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";

export function middleware(request: NextRequest) {
  // Example function to validate auth
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api/*")
  ) {
    return NextResponse.next();
  }
  // const subdomain = request;
  // console.log('req obj ========>', subdomain.headers.get('host'));
  // console.log('req obj path222 =======>', subdomain.nextUrl.pathname);
  // console.log('req verdict =======>', cookieVerdict);
  // const cookieVerdict = request.cookies.has('organizationId');
  // if (!Cookies.get("organizationId")) {
  // Cookies.set("organizationId", "3", { sameSite: "None" });
  //}
  console.log("hi");
  const response = NextResponse.next();
  // response.cookies.set("organizationId", "3");
  //   response.cookies.set({
  //     name: "vercel",
  //     value: "fast",
  //     path: "/test",
  //   });
  // Cookies.set("organizationId", "3", { sameSite: "None" });

  // return NextResponse.redirect(loginUrl)
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|favicon.ico).*)",
  ],
};
