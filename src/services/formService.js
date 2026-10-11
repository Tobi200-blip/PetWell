const ENDPOINT = import.meta.env.VITE_FORMSPREE_URL;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value);

export async function submitForm(formType, data) {
  if (!ENDPOINT) {
    if (import.meta.env.DEV) {
      console.warn(
        '[formService] VITE_FORMSPREE_URL is not set, so this is a simulated submit.',
        { formType, data }
      );
      await wait(700);
      return { ok: true, demo: true };
    }
    return { ok: false, error: "This form isn't set up yet. Please try again later." };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ formType, ...data }),
    });

    if (res.ok) return { ok: true };
    return { ok: false, error: 'Something went wrong. Please try again.' };
  } catch {
    return { ok: false, error: 'Network problem. Check your connection and try again.' };
  }
}