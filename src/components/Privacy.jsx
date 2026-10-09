import LegalLayout, { Section } from './LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout title="Privacy policy" updated="October 2026">
      <Section heading="Information we collect">
        We collect information you provide directly, such as your email address when you subscribe to our newsletter or contact us, and basic usage data such as pages visited and device type.
      </Section>
      <Section heading="How we use your information">
        We use your information to send newsletters you've requested, respond to enquiries, and improve our content and services. We do not sell your personal information.
      </Section>
      <Section heading="Cookies">
        We use cookies to understand how visitors use the site and to improve their experience. You can disable cookies in your browser settings, though some features may not work as expected.
      </Section>
      <Section heading="Your rights">
        You can request access to, correction of, or deletion of your personal data at any time by contacting us through our contact page.
      </Section>
      <Section heading="Contact">
        For privacy-related questions, please reach us through the contact page on this site.
      </Section>
    </LegalLayout>
  );
}