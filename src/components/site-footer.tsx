import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

const footerSocials = [
  {
    href: siteConfig.links.discord,
    name: "Discord",
    icon: <DiscordLogoIcon className="h-4 w-4" />,
  },
  {
    href: siteConfig.links.twitter,
    name: "Twitter",
    icon: <Icons.twitter className="h-4 w-4" />,
  },
  {
    href: siteConfig.links.github,
    name: "GitHub",
    icon: <Icons.gitHub className="h-4 w-4" />,
  },
];

export function SiteFooter() {
  const t = useTranslations("footerNavLabels");
  const footerNavs = [
    {
      label: t("labelName-1"),
      items: [
        {
          href: "/pricing",
          name: t("labelName-1-ItemName-1"),
        },
      ],
    },

    {
      label: t("labelName-4"),
      items: [
        {
          href: "/terms",
          name: t("labelName-4-ItemName-1"),
        },

        {
          href: "/privacy",
          name: t("labelName-4-ItemName-2"),
        },
      ],
    },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="md:flex md:justify-between p-4 py-16 sm:pb-24 gap-4">
          <div className="mb-12 flex-col flex gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8"></div>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {t("applicationName")}
              </span>
            </Link>
            <p className="max-w-xs">{t("applicationDescription")}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-4">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-semibold text-foreground uppercase dark:text-white">
                  {nav.label}
                </h2>
                <ul className="gap-2 grid">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-gray-400 hover:text-muted-foreground hover:opacity-90 duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between border-t py-4 gap-2">
          <div className="flex space-x-5 sm:justify-center sm:mt-0">
            {/* {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="text-muted-foreground hover:text-foreground dark:hover:text-muted-foreground"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))} */}
          </div>
          <span className="text-sm text-muted-foreground sm:text-center dark:text-gray-400">
            © {currentYear}
            {" - "}
            <Link href="/" className="cursor-pointer">
              {t("applicationName")}
            </Link>
            {t("reservedRights")}
          </span>
        </div>
      </div>
    </footer>
  );
}
