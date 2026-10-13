let client: Promise<typeof import("@emailjs/browser")> | undefined;

/** Warm on form focus; submitting also awaits this same request. */
export function loadEmailClient() {
  client ??= import("@emailjs/browser").catch((error: unknown) => {
    client = undefined;
    throw error;
  });
  return client;
}
