"use client";

import Link from "next/link";
import { useState, type ComponentProps } from "react";

/** Prefetch when someone intends to navigate, keeping initial bandwidth for this page. */
export function IntentLink({ prefetch, onMouseEnter, onFocus, onTouchStart, ...props }: ComponentProps<typeof Link>) {
  const [intent, setIntent] = useState(false);

  return (
    <Link
      {...props}
      prefetch={prefetch === undefined ? (intent ? null : false) : prefetch}
      onMouseEnter={(event) => { onMouseEnter?.(event); if (!event.defaultPrevented) setIntent(true); }}
      onFocus={(event) => { onFocus?.(event); if (!event.defaultPrevented) setIntent(true); }}
      onTouchStart={(event) => { onTouchStart?.(event); if (!event.defaultPrevented) setIntent(true); }}
    />
  );
}
