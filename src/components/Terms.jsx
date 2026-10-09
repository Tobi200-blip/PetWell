import LegalLayout, { Section } from './LegalLayout';

export default function Terms() {
  return (
    <LegalLayout title="Terms of service" updated="October 2026">
      <Section heading="Acceptance of terms">
        By accessing or using PetWell, you agree to be bound by these terms. If you do not agree, please do not use the site.
      </Section>
      <Section heading="Informational content only">
        The content on PetWell, including breed guides and health information, is provided for general informational purposes and is not a substitute for professional veterinary advice, diagnosis, or treatment. Always consult a licensed veterinarian about your pet's health.
      </Section>
      <Section heading="Intellectual property">
        All content, design, and branding on this site belong to PetWell or its licensors and may not be reproduced without permission.
      </Section>
      <Section heading="Limitation of liability">
        PetWell is not liable for any loss or damage arising from your use of the site or reliance on its content.
      </Section>
      <Section heading="Changes to these terms">
        We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms.
      </Section>
    </LegalLayout>
  );
}