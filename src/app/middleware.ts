import { verifyToken } from "@/lib/auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const isAuth = !!(token && verifyToken(token));

  const { pathname } = req.nextUrl;

  const protectedRoutes = ["/dashboard", "/booking"];
  if (protectedRoutes.some((p) => pathname.startsWith(p)) && !isAuth) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/sign-in";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  if (pathname === "/auth" && isAuth) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*", "/booking/:path*", "/auth/:path*"],
};
// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/booking/:path*",
//     "/auth/:path*",
//     "/api/auth/sign-in",
//     "/api/auth/forgot-password",
//     "/api/auth/reset-password",
//     "/api/auth/me",
//   ],
// };
