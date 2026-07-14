import { NextResponse, type NextRequest } from "next/server";

// Keep in sync with UNLOCK_KEY in components/EnterGate.tsx -- that's the
// client-side gate on the home page; this is what stops someone from
// skipping it entirely via a direct link to an inner page. Same caveat as
// the gate itself: this is a soft/fun barrier (the cookie is trivially
// spoofable from devtools), not real security.
const UNLOCK_COOKIE = "portfolio-unlocked";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The gate itself lives on the home page -- never redirect it, or a
  // locked-out visitor could never reach the password field at all.
  if (pathname === "/") {
    return NextResponse.next();
  }

  const unlocked = request.cookies.get(UNLOCK_COOKIE)?.value === "true";
  if (unlocked) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Everything except Next's internal assets, favicon, and the public
    // media folders (so the home page's own video/image can still load
    // pre-unlock, and so this doesn't accidentally gate static files).
    "/((?!_next/static|_next/image|favicon.ico|images|videos|fonts).*)",
  ],
};
