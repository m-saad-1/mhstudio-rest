import type { ImgHTMLAttributes } from "react";
import { preload } from "react-dom";
import { responsiveImages, type ResponsiveImageName } from "@/data/responsive-images";

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "width" | "height"> & {
  name: ResponsiveImageName;
  alt: string;
  sizes: string;
  fill?: boolean;
  priority?: boolean;
};

export const SERVICE_IMAGE_SIZES = "(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 60px), 1024px";

/** Build-time AVIF/WebP variants avoid an image-encoding request on the critical path. */
export function ResponsiveImage({ name, alt, sizes, fill = false, priority = false, style, loading, fetchPriority, ...props }: ResponsiveImageProps) {
  const image = responsiveImages[name];
  const srcSet = (variants: readonly { src: string; width: number }[]) => variants.map(({ src, width }) => `${src} ${width}w`).join(", ");
  const avif = srcSet(image.avif);
  const webp = srcSet(image.webp);
  if (priority) preload(image.avif[image.avif.length - 1].src, { as: "image", type: "image/avif", imageSrcSet: avif, imageSizes: sizes, fetchPriority: "high" });

  return (
    <picture className={fill ? "contents" : "block"}>
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        {...props}
        src={image.webp[image.webp.length - 1].src}
        alt={alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading={loading ?? (priority ? "eager" : "lazy")}
        fetchPriority={fetchPriority ?? (priority ? "high" : "low")}
        decoding="async"
        style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style}
      />
    </picture>
  );
}
