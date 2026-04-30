import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

export default function ProjectImage({ src, alt, isHovered, isDimmed }) {
  const [loaded, setLoaded] = useState(false);

  const imageClass = [
    "w-full h-44 object-cover rounded-xl transition-all duration-500 ease-in-out",
    // Default: grayscale + slightly dark — "sleeping" state
    "grayscale brightness-75",
    // Hovered: full color, zoom in, brighten, blur (so overlay text is readable)
    isHovered && "!grayscale-0 !brightness-110 !scale-110 !blur-sm",
    // Sibling dimmed: deeper darkness
    isDimmed && "!brightness-40 !opacity-50",
    // Skeleton fade-in
    loaded ? "opacity-100" : "opacity-0 absolute inset-0",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative w-full h-44 overflow-hidden rounded-xl">
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={176}
          sx={{ bgcolor: "grey.900", borderRadius: "12px" }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={imageClass}
      />
    </div>
  );
}
