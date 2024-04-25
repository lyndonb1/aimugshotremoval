"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "use-intl";

export const TestimonialsAlt = () => {
  const t = useTranslations("testimonialNames");
  const testimonials = [
    {
      name: "Joel",
      avatar: "J",
      title: t("title-1"),
      description: t("description-1"),
    },
    {
      name: "Antonio",
      avatar: "A",
      title: t("title-2"),
      description: t("description-2"),
    },
    {
      name: "Mark",
      avatar: "M",
      title: t("title-3"),
      description: t("description-3"),
    },
    {
      name: "Mary",
      avatar: "M",
      title: t("title-4"),
      description: t("description-4"),
    },
  ];
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl font-extrabold mb-10">
        {t("testimonialTitle")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-muted-foreground text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
