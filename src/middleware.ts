import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({ ...routing, localeDetection: false });

export const config = {
  // Match all pathnames except for
  //- ... if they start with `/api`, `/trpc`, `/_next`
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"
};
