import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { defaultLocale, locales } from "../locales/locales";
import { intlMiddleware } from "./middleware";

export default authMiddleware({
  beforeAuth: (req) =>
    // Execute next-intl middleware before Clerk's auth middleware
    intlMiddleware(req),
  // Ensure that locale specific sign-in pages are public
  publicRoutes: [
    "/",
    ...locales
      .filter((locale) => locale !== defaultLocale)
      .map((locale) => `/${locale}`),
    `/sign-in`,
    `/sign-up`,
    `/:locale/sign-in`,
    `/:locale/sign-up`,
    `/pricing`,
    `/:locale/terms`,
    `/terms`,
    `/:locale/privacy`,
    `/privacy`,
  ],
  afterAuth: (auth, req, evt) => {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    return intlMiddleware(req);
  },
});
