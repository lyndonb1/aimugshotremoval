import { LandingNavbar } from "@/components/landing/landing-navbar";
import { Hero } from "@/components/landing/hero/hero";
import Testimonials from "@/components/landing/testimonials/testimonials";
import TestimonialHighlight from "@/components/landing/testimonials/testimonial-highlight";
import { Suspense } from "react";
import { TestimonialsAlt } from "@/components/landing/testimonials/testimonials-alt";
import { useLocale } from "next-intl";
import Pricing from "@/components/pricing-plans";
import FAQ from "@/components/landing/faq";

const LandingPage = () => {
  // const user = await getCurrentUser()
  // if (user) redirect("/dashboard")
  const locale = useLocale();

  return (
    <div className="h-full ">
      <LandingNavbar />
      <Hero />
      <TestimonialHighlight />
      <Suspense>
        <Testimonials locale={locale} />
      </Suspense>
      <TestimonialsAlt />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default LandingPage;
