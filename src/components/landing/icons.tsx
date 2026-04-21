import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "calendar"
  | "chart"
  | "check"
  | "layers"
  | "message"
  | "phone"
  | "spark"
  | "sync"
  | "target";

export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    calendar: (
      <>
        <path d="M7 3v4M17 3v4M4 9h16" />
        <path d="M5 5h14a1 1 0 0 1 1 1v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1Z" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 5-7" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </>
    ),
    message: (
      <>
        <path d="M21 12a8 8 0 0 1-8 8H7l-4 3 1.4-5.2A8 8 0 1 1 21 12Z" />
        <path d="M8 11h8M8 15h5" />
      </>
    ),
    phone: (
      <path d="M6.7 3.8 9 3l2.2 5.1-1.5 1.1a12.7 12.7 0 0 0 5.1 5.1l1.1-1.5L21 15l-.8 2.3a3 3 0 0 1-3.4 2C9.8 17.8 6.2 14.2 4.7 7.2a3 3 0 0 1 2-3.4Z" />
    ),
    spark: (
      <>
        <path d="M12 2v5M12 17v5M4.9 4.9l3.5 3.5M15.6 15.6l3.5 3.5M2 12h5M17 12h5M4.9 19.1l3.5-3.5M15.6 8.4l3.5-3.5" />
        <path d="M12 8.5A3.5 3.5 0 1 1 12 15.5 3.5 3.5 0 0 1 12 8.5Z" />
      </>
    ),
    sync: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M4 17v-5h5" />
        <path d="M18.2 9A7 7 0 0 0 6 6.7L4 9" />
        <path d="M5.8 15A7 7 0 0 0 18 17.3l2-2.3" />
      </>
    ),
    target: (
      <>
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
        <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
