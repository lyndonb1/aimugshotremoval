import { siteConfig } from "@/config/site";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="prose container flex flex-col justify-center max-w-10xl pb-16 px-8">
      <h1 className="tracking-wide font-semibold flex m-auto text-5xl text-left pt-12 text-gray-950">
        Privacy Policy
      </h1>

      <p>
        <strong>Last updated: [04/26/2024]</strong>
      </p>

      <p>
        Thank you for choosing to be part of our community at
        AiMugshotRemoval.com. We are committed to protecting your personal
        information and your right to privacy. If you have any questions or
        concerns about our policy, or our practices with regards to your
        personal information, please contact us at{" "}
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
      </p>

      <p>
        When you visit our website AiMugshotRemoval.com, and use our services,
        you trust us with your personal information. We take your privacy very
        seriously. In this privacy policy, we seek to explain to you in the
        clearest way possible what information we collect, how we use it and
        what rights you have in relation to it. We hope you take some time to
        read through it carefully, as it is important. If there are any terms in
        this privacy policy that you do not agree with, please discontinue use
        of our Sites and our services.
      </p>

      <p>
        This privacy policy applies to all information collected through our
        website (such as AiMugshotRemoval.com), and/or any related services,
        sales, marketing or events (we refer to them collectively in this
        privacy policy as the &quot;Services&quot;).
      </p>

      <h2>1. What Information Do We Collect?</h2>

      <p>
        <strong>Personal information you disclose to us</strong>
        <br />
        In Short: We collect personal information that you provide to us such as
        name, address, contact information, passwords and security data, and
        payment information.
      </p>

      <p>
        We collect personal information that you voluntarily provide to us when
        registering at the Services expressing an interest in obtaining
        information about us or our products and services, when participating in
        activities on the Services or otherwise contacting us.
      </p>

      <p>
        The personal information that we collect depends on the context of your
        interactions with us and the Services, the choices you make and the
        products and features you use. The personal information we collect can
        include the following:
      </p>

      <ul>
        <li>
          Name and Contact Data. We collect your first and last name, email
          address, postal address, phone number, and other similar contact data.
        </li>
        <li>
          Credentials. We collect passwords, password hints, and similar
          security information used for authentication and account access.
        </li>
        <li>
          Payment Data. We collect data necessary to process your payment if you
          make purchases, such as your payment instrument number (such as a
          credit card number), and the security code associated with your
          payment instrument.
        </li>
      </ul>

      <p>
        All personal information that you provide to us must be true, complete
        and accurate, and you must notify us of any changes to such personal
        information.
      </p>

      <h2>2. How Do We Use Your Information?</h2>

      <p>
        In Short: We process your information for purposes based on legitimate
        business interests, the fulfillment of our contract with you, compliance
        with our legal obligations, and/or your consent.
      </p>

      <p>
        We use personal information collected via our Services for a variety of
        business purposes described below. We process your personal information
        for these purposes in reliance on our legitimate business interests, in
        order to enter into or perform a contract with you, with your consent,
        and/or for compliance with our legal obligations. We indicate the
        specific processing grounds we rely on next to each purpose listed
        below.
      </p>

      <ul>
        <li>
          To facilitate account creation and logon process with your Consent.
        </li>
        <li>
          To send you marketing and promotional communications for Business
          Purposes and/or with your Consent.
        </li>
        <li>
          To send administrative information to you for Business Purposes, Legal
          Reasons and/or possibly Contractual.
        </li>
        <li>To fulfill and manage your orders for Contractual reasons.</li>
        <li>
          To protect our Services for Business Purposes and/or Legal Reasons.
        </li>
      </ul>

      <h2>3. Will Your Information Be Shared With Anyone?</h2>

      <p>
        In Short: We only share information with your consent, to comply with
        laws, to provide you with services, to protect your rights, or to
        fulfill business obligations.
      </p>

      <ul>
        <li>
          Consent: We may process your data if you have given us specific
          consent to use your personal information in a specific purpose.
        </li>
        <li>
          Legitimate Interests: We may process your data when it is reasonably
          necessary to achieve our legitimate business interests.
        </li>
        <li>
          Performance of a Contract: Where we have entered into a contract with
          you, we may process your personal information to fulfill the terms of
          our contract.
        </li>
        <li>
          Legal Obligations: We may disclose your information where we are
          legally required to do so in order to comply with applicable law,
          governmental requests, a judicial proceeding, court order, or legal
          process, such as in response to a court order or a subpoena (including
          in response to public authorities to meet national security or law
          enforcement requirements).
        </li>
        <li>
          Vital Interests: We may disclose your information where we believe it
          is necessary to investigate, prevent, or take action regarding
          potential violations of our policies, suspected fraud, situations
          involving potential threats to the safety of any person and illegal
          activities, or as evidence in litigation in which we are involved.
        </li>
      </ul>

      <h2>4. How Long Do We Keep Your Information?</h2>

      <p>
        In Short: We keep your information for as long as necessary to fulfill
        the purposes outlined in this privacy policy unless otherwise required
        by law.
      </p>

      <p>
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this privacy policy, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting or other legal requirements). No purpose in this policy will
        require us keeping your personal information for longer than the period
        of time in which users have an account with us.
      </p>

      <h2>5. How Do We Keep Your Information Safe?</h2>

      <p>
        In Short: We aim to protect your personal information through a system
        of organizational and technical security measures.
      </p>

      <p>
        We have implemented appropriate technical and organizational security
        measures designed to protect the security of any personal information we
        process. However, please also remember that we cannot guarantee that the
        internet itself is 100% secure. Although we will do our best to protect
        your personal information, transmission of personal information to and
        from our Services is at your own risk. You should only access the
        services within a secure environment.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions or comments about this policy, you may email us at{" "}
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
