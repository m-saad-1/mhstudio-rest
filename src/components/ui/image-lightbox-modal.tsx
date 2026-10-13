"use client";

import Image from "next/image";
import X from "lucide-react/dist/esm/icons/x";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import { TrackedLink } from "@/components/ui/tracked-link";
import { Modal } from "@/components/ui/modal";
import { useId } from "react";

type ImageLightboxModalProps = { isOpen: boolean; onClose: () => void; imageSrc: string; imageAlt: string; title: string; category: string; liveHref?: string };

export function ImageLightboxModal({ isOpen, onClose, imageSrc, imageAlt, title, category, liveHref }: ImageLightboxModalProps) {
  const titleId = useId();
  return (
    <Modal open={isOpen} onClose={onClose} titleId={titleId}>
      {isOpen && <>
        <div className="dialog-heading">
          <div className="min-w-0"><p className="text-sm font-semibold uppercase tracking-wide text-accent-text">{category}</p><h3 id={titleId} className="mt-1 text-base font-semibold text-foreground">{title}</h3></div>
          <button type="button" onClick={onClose} aria-label="Close image preview" className="icon-button"><X className="h-5 w-5" /></button>
        </div>
        <div className="dialog-body bg-surface-secondary" tabIndex={0} role="region" aria-label="Image preview">
          <Image src={imageSrc} alt={imageAlt} width={1600} height={1000} sizes="(max-width: 1024px) 100vw, 1024px" className="mx-auto h-auto max-h-[70dvh] w-full rounded-card object-contain" />
        </div>
        {liveHref && <div className="dialog-footer"><TrackedLink href={liveHref} eventName="click_lightbox_live" target="_blank" rel="noopener noreferrer" className="button-secondary"><span>Live Project</span><ExternalLink className="h-4 w-4" /></TrackedLink></div>}
      </>}
    </Modal>
  );
}
