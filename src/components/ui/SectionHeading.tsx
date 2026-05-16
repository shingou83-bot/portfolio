import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  invert?: boolean;
  density?: "default" | "compact";
  variant?: "marketing" | "document";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  invert = false,
  density = "default",
  variant = "marketing",
}: SectionHeadingProps) {
  const isDocument = variant === "document";
  const margin =
    density === "compact"
      ? isDocument
        ? "mb-8 md:mb-10"
        : "mb-10 md:mb-12"
      : isDocument
        ? "mb-10 md:mb-12"
        : "mb-16 md:mb-20";

  const align = isDocument ? "text-left" : "mx-auto text-center";

  return (
    <div className={`max-w-3xl ${align} ${margin}`}>
      {eyebrow && !isDocument ? (
        <p
          className={`mb-2 text-sm font-medium uppercase tracking-wider md:text-base ${
            invert ? "text-white/70" : "text-muted"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`tracking-tight ${
          isDocument
            ? "text-2xl font-semibold md:text-3xl"
            : "text-3xl font-bold md:text-4xl lg:text-5xl"
        } ${invert ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            invert ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
