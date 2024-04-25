import { defaultLocale } from "../../../../../../../locales/locales";
import { SignIn } from "@clerk/nextjs";
import { useLocale } from "next-intl";

export default function Page() {
  const locale = useLocale();
  const path =
    locale !== defaultLocale && locale !== "en"
      ? `/${locale}/sign-in`
      : "/sign-in";

  return <SignIn path={path} />;
}
