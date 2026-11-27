import LegalLayout, { Section } from './LegalLayout';

export default function ImageCredits() {
  return (
    <LegalLayout title="Image credits" updated="November 2026">
      <Section heading="Where our photos come from">
        Most of the dog and pet photos on AllPetsLoft are free-to-use images from{' '}
        <a
          href="https://pixabay.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-700 hover:text-blue-900"
        >
          Pixabay
        </a>
        , shared under the Pixabay Content License. We are grateful to the photographers and
        contributors who share their work there.
      </Section>
      <Section heading="A note on accuracy">
        Photos are chosen to illustrate each breed or topic, but individual dogs vary, and a photo
        may not show every typical feature of a breed. If you spot a photo that looks like the wrong
        breed, please let us know through our contact page and we will replace it.
      </Section>
      <Section heading="Photo and credit requests">
        If you are a photographer and would like a credit added, or an image removed, please contact
        us and we will update the site promptly.
      </Section>
    </LegalLayout>
  );
}
