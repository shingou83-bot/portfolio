import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "wide" | "narrow";
};

const sizeClass = {
  wide: "max-w-6xl",
  narrow: "max-w-3xl",
} as const;

export function Container({
  children,
  className = "",
  size = "wide",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClass[size]} ${className}`}
    >
      {children}
    </div>
  );
}
