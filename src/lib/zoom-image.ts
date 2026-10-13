import { getImageProps } from "next/image";

/** Fetch a full-resolution, browser-compatible variant only when zoom is opened. */
export function getZoomImage(src: string) {
  const { props } = getImageProps({ src, alt: "", width: 1920, height: 1080 });
  return { src: props.src, srcSet: "", sizes: "100vw" };
}
