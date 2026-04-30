import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const hostname = request.nextUrl.hostname;
  const isLocalRequest =
    hostname === "localhost" || hostname === "127.0.0.1";

  if (
    process.env.NODE_ENV === "production" &&
    !isLocalRequest &&
    forwardedProto &&
    forwardedProto !== "https"
  ) {
    const secureUrl = request.nextUrl.clone();
    secureUrl.protocol = "https";

    return NextResponse.redirect(secureUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
