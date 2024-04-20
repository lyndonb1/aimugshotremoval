import { LandingNavbar } from "@/components/landing/landing-navbar";
import { Hero } from "@/components/landing/hero/hero";
import Testimonials from "@/components/landing/testimonials/testimonials";
import TestimonialHighlight from "@/components/landing/testimonials/testimonial-highlight";
import { Suspense } from "react";
import { TestimonialsAlt } from "@/components/landing/testimonials/testimonials-alt";
import { useLocale } from "next-intl";

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
      {/* 
      <TrustedBy />
      <Pricing />
      <FAQ />
      <Features /> */}
    </div>
  );
};

export default LandingPage;
