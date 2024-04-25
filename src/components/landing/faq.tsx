"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useTranslations } from "use-intl";

const FAQ = () => {
  const t = useTranslations("faq");
  return (
    <section id="faq">
      <div className="py-14 max-w-[600px] mx-auto">
        <div className="mx-auto max-w-md text-center sm:max-w-2xl">
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight">
            {t("title")}
          </h2>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("accordionTrigger-1")}</AccordionTrigger>
            <AccordionContent>{t("accordionContent-1")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t("accordionTrigger-2")}</AccordionTrigger>
            <AccordionContent>{t("accordionContent-2")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
