import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  /** 暗い背景セクション用 */
  invert?: boolean;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
      {eyebrow ? (
        <p
          className={`mb-2 text-sm font-bold uppercase tracking-wider md:text-base ${
            invert ? "text-gold-400" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          invert ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={`mt-5 text-base leading-[1.85] md:text-lg md:leading-[1.85] ${
            invert ? "text-white/75" : "text-navy-700"
          }`}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
