"use client";

import { Button } from "@/components/ui/button";
// import { useUser } from "@/lib/hooks/user/useUser"
import { subscriptionPlans } from "@/lib/stripe/subscriptionPlans";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { useTranslations } from "use-intl";
import { env } from "@/env";

type BillingInterval = "year" | "month";

type Name = "Pro";

// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export interface Plan {
  name: Name;
  cta: string;
  desc: string;
  price: number | string;
  priceAnnual: number | string;
  isMostPop: boolean;
  priceIdMonth: string;
  priceIdYear: string;
  features: string[];
}

// const enterprisePlan: Plan = {
//   name: "Enterprise" as Name,
//   desc: "For large-scale applications managing serious workloads. Let us know what you need and we'll make it happen.",
//   price: "Contact Us",
//   priceAnnual: "Contact Us",
//   priceIdMonth: "",
//   priceIdYear: "",
//   isMostPop: false,
//   features: [
//     // "Unlimited logs",
//     // "Track multiple API keys",
//     // "Detailed User Analytics",
//     // "Data Exports (soon)",
//     // "Email / Slack Alerts (soon)",
//     // "Weekly / Monthly Reports (soon)",
//     // "Unlimited team members (soon)",
//     // "Unlimited projects (soon)",
//     "SOC 2",
//     "24/7/365 Priority Support",
//     "Priority Feature Requests",
//     "Private Slack channel",
//   ],
// };

const Pricing = () => {
  const t = useTranslations("pricingPlans");
  const plans: Plan[] = [
    {
      name: t("name") as Name,
      cta: t("cta"),
      desc: t("desc"),
      price: 299,
      priceAnnual: 299,
      priceIdMonth: "price_1NaV0jB24wj8TkEzdNo0HXp7",
      priceIdYear: "price_1NaV0jB24wj8TkEzGVbNRFHf",
      isMostPop: true,
      features: [
        t("feature-1"),
        t("feature-2"),
        t("feature-3"),
        t("feature-4"),
        // "1 member",
        // "2 projects",
      ],
    },
    // {
    //   name: "Startup" as Name,
    //   desc: "Everything you need for a growing startup.",
    //   price: 60,
    //   priceAnnual: 40,
    //   priceIdMonth: "price_1NaV0kB24wj8TkEzB3kgrtuz",
    //   priceIdYear: "price_1NaV0kB24wj8TkEziIqZXW3j",
    //   isMostPop: true,
    //   features: [
    //     "1,000,000 logs / month",
    //     "Detailed User Analytics",
    //     "Track multiple API keys (soon)",
    //     "Data Exports (soon)",
    //     "Email / Slack Alerts (soon)",
    //     "Weekly / Monthly Reports (soon)",
    //     "3 members (soon)",
    //     "3 projects (soon)",
    //   ],
    // },
    // {
    //   name: "Team" as Name,
    //   desc: "For teams of all sizes.",
    //   price: 500,
    //   priceAnnual: 400,
    //   priceIdMonth: "price_1NaV0kB24wj8TkEzpoXWRwEB",
    //   priceIdYear: "price_1NaV0kB24wj8TkEz8nuJ68Xq",
    //   isMostPop: false,
    //   features: [
    //     "Unlimited logs",
    //     "Detailed User Analytics",
    //     "Track multiple API keys (soon)",
    //     "Data Exports (soon)",
    //     "Email / Slack Alerts (soon)",
    //     "Weekly / Monthly Reports (soon)",
    //     "Unlimited team members (soon)",
    //     "Unlimited projects (soon)",
    //   ],
    // },
  ];

  const router = useRouter();
  // const { user, isLoading, subscribed } = useUser()

  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");

  const handleCheckout = (plan: Name) => {
    // if (!user) {
    //   router.push("/sign-up")
    //   return
    // }

    if (plan === "Enterprise") {
      window.open("https://cal.com/dillionverma/llm-report-demo", "_blank");
    } else {
      const params = new URLSearchParams({
        // client_reference_id: user.id,
      });

      console.log(
        plan,
        process.env.NODE_ENV,
        subscriptionPlans[
          process.env.NODE_ENV as "development" | "production" | "test"
        ]
      );
      const paymentLink =
        subscriptionPlans[
          process.env.NODE_ENV as "development" | "production" | "test"
        ][plan.toLowerCase() as "free" | "pro"];
      const url = `${paymentLink}?${params.toString()}`;
      window.open(env.NEXT_PUBLIC_STRIPE_PAYMENT_PAGE_URL, "_blank");
    }
  };

  return (
    <Suspense>
      <section className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h3 className="text-3xl font-semibold text-accent-foreground">
          {t("title")}
        </h3>
        <p className="mt-3">
          <strong>{t("subtitle")}</strong>
        </p>
        <div
          className={`mt-8 ${
            plans.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          } gap-4`}
        >
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "flex flex-col items-center border p-4 rounded-lg",
                {
                  "shadow-xl border-primary": item.isMostPop,
                  "w-full max-w-md": plans.length === 1,
                  "w-full": plans.length > 1,
                }
              )}
            >
              <span className="text-primary font-medium">{item.name}</span>
              <p className="text-lg">{item.desc}</p>
              <div className="my-2 text-4xl font-bold">
                {formatter.format(item.price as number)}
              </div>
              <ul className="my-4 text-left">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button onClick={() => handleCheckout(item.name)}>
                {item.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
};
export default Pricing;
