"use client";

import { IntentLink as Link } from "@/components/ui/intent-link";
import { sendGAEvent } from "@/lib/analytics";

type TrackedLinkProps = React.ComponentProps<typeof Link> & {
  eventName: string;
  eventCategory?: string;
};

export function TrackedLink({ eventName, eventCategory = "CTA", onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        sendGAEvent({ event: eventName, category: eventCategory, label: props.href.toString() });
        if (onClick) onClick(e);
      }}
    />
  );
}
