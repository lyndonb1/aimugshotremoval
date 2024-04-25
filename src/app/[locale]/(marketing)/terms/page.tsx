import { siteConfig } from "@/config/site";
import Link from "next/link";

const Terms = () => {
  return (
    <div className="prose container flex flex-col justify-center max-w-10xl pb-16 px-8">
      <h1 className="tracking-wide font-semibold flex m-auto text-5xl text-left pt-12 text-gray-950">
        Terms of Service
      </h1>

      <p>
        <strong>1. Introduction</strong>
        <br />
        Welcome to AiMugshotRemoval.com. We specialize in assisting individuals
        in removing their mugshots from various public record sources. These
        terms of service govern your use of our website and services.
      </p>

      <p>
        <strong>2. Services Description</strong>
        <br />
        We provide consultancy and administrative services aimed at removing
        mugshots from publicly accessible records and databases. Our services
        involve submitting requests and negotiating with website operators and
        other entities that display or control these records.
      </p>

      <p>
        <strong>3. No Guarantee of Results</strong>
        <br />
        AiMugshotRemoval.com makes every effort to process your requests
        efficiently and effectively; however, we do not guarantee that all
        attempts to remove mugshots will be successful. The removal process is
        highly dependent on the specific policies and cooperation of the
        entities holding the records. Each case will be handled on an individual
        basis, and outcomes may vary.
      </p>

      <p>
        <strong>4. Time Frame for Removal</strong>
        <br />
        The time frame for mugshot removal can vary significantly depending on
        the complexity of the case and the responsiveness of the record holders.
        While some mugshots may be removed within a few weeks, others,
        particularly more complex cases, may take several months. We commit to
        keeping you informed of the progress of your case.
      </p>

      <p>
        <strong>5. No Refunds</strong>
        <br />
        Due to the nature of the services provided by AiMugshotRemoval.com, all
        payments made to us are final. We cannot offer refunds once work on a
        case has begun, regardless of the outcome. This no-refund policy is in
        recognition of the resources and labor invested in attempting to remove
        each mugshot.
      </p>

      <p>
        <strong>6. Payment</strong>
        <br />
        Services require upfront payment which will be detailed at the time of
        your consultation or via our website. All transactions are processed in
        U.S. dollars.
      </p>

      <p>
        <strong>7. Use of Our Services</strong>
        <br />
        By using our services, you confirm that you have the legal right to
        request the removal of the mugshot and that you are either the
        individual in the mugshot or are legally authorized to act on behalf of
        that individual.
      </p>

      <p>
        <strong>8. Limitation of Liability</strong>
        <br />
        AiMugshotRemoval.com shall not be liable for any damages or losses
        arising from our services or your inability to use our services. Our
        liability to you in any circumstance is limited to the amount you paid
        for our services.
      </p>

      <p>
        <strong>9. Changes to Terms</strong>
        <br />
        We reserve the right to modify these terms at any time. Your continued
        use of our services following any such modification constitutes your
        acceptance of the new terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or suggestions about our Terms, do not
        hesitate to contact us at{" "}
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
      </p>
    </div>
  );
};

export default Terms;
