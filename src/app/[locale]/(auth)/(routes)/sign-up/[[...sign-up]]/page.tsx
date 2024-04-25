import { SignUp } from "@clerk/nextjs";
import { useLocale } from "next-intl";
import { defaultLocale } from "../../../../../../../locales/locales";

export default function Page() {
  const locale = useLocale();
  const path =
    locale !== defaultLocale && locale !== "en"
      ? `/${locale}/sign-up`
      : "/sign-up";

  return <SignUp path={path} />;
}
