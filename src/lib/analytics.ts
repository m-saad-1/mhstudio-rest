type AnalyticsEvent = { event: string; [key: string]: string | number | boolean };
type Sender = (event: AnalyticsEvent) => void;

let sender: Sender | undefined;
const pendingEvents: AnalyticsEvent[] = [];

/** Retain early interactions while the Google provider is loading. */
export function sendGAEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  if (sender) sender(event);
  else if (pendingEvents.length < 50) pendingEvents.push(event);
}

export function connectAnalytics(nextSender: Sender) {
  sender = nextSender;
  for (const event of pendingEvents.splice(0)) nextSender(event);
}
