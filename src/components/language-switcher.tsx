import { Fragment } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { renderFlag } from "./render-flag";
import { locales } from "../../locales/locales";
import { useLocale } from "next-intl";
import Link from "next/link";

export function LanguageSwitcher() {
  const locale = useLocale();
  const filteredLocales = locales?.filter(
    (currentLocale) => currentLocale !== locale
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${cn(
          buttonVariants({ size: "sm", variant: "secondary" }),
          "p-3"
        )}`}
      >
        {renderFlag(locale)}
        <span className="sr-only">Languages</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {filteredLocales?.map((currentLocale, index) => (
          <Fragment key={index}>
            <Link
              href={`/${currentLocale}`}
              // TODO error on sub layout language switch (example from dashboard)
              // href={pathname?.replace(`/${locale}`, "") ?? "/"}
            >
              <DropdownMenuItem className="flex cursor-pointer items-start justify-center">
                {renderFlag(currentLocale)}
              </DropdownMenuItem>
            </Link>
            {index !== filteredLocales.length - 1 && <DropdownMenuSeparator />}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
