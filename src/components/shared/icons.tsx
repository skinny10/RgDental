import type { Service, SocialLink } from "../../types";

type IconProps = { className?: string };

export function ServiceIcon({
  name,
  className = "h-7 w-7",
}: {
  name: Service["icon"];
  className?: string;
}) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "prosthesis":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M6 5c3-1.5 9-1.5 12 0 1 3-1 4-1 7 0 2 1 3 0 5-2 1-4-1-5-1s-3 2-5 1c-1-2 0-3 0-5 0-3-2-4-1-7Z" />
          <path d="M9 8h6M9 11h6" />
        </svg>
      );
    case "cleaning":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3c-2.8 0-5 2.1-5 5.3 0 2 .8 2.7 1.3 4.3.4 1.2.3 2.6.9 4 .4.9 1 1.4 1.6 1.4h2.4c.6 0 1.2-.5 1.6-1.4.6-1.4.5-2.8.9-4 .5-1.6 1.3-2.3 1.3-4.3C17 5.1 14.8 3 12 3Z" />
          <path d="M9.5 9.5c.7.6 1.1 1.3 1.1 2.3M14.5 9.5c-.7.6-1.1 1.3-1.1 2.3" />
        </svg>
      );
    case "extraction":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M9 3c-2.2 0-4 1.7-4 4.2 0 1.6.6 2.2 1 3.4.3 1 .2 2 .7 3.1" />
          <path d="M5 20l2.5-4.5" />
          <path d="M13 6c2-1.5 5-1.2 6.5.5" strokeDasharray="1 3.2" />
          <path d="M18 4l3 2-2 3" />
        </svg>
      );
    case "braces":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M5 8c1.5 6 2 10 4 10s1.5-4 3-4 1 4 3 4 2.5-4 4-10" />
          <circle cx="5" cy="7" r="1" fill="currentColor" stroke="none" />
          <circle cx="9.5" cy="6.3" r="1" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="6.3" r="1" fill="currentColor" stroke="none" />
          <circle cx="19" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "amalgam":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M6 13c0-5 2.7-8.5 6-8.5S18 8 18 13c0 3.8-2.7 6.5-6 6.5S6 16.8 6 13Z" />
          <circle cx="12" cy="12.5" r="2.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "resin":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M6 13c0-5 2.7-8.5 6-8.5S18 8 18 13c0 3.8-2.7 6.5-6 6.5S6 16.8 6 13Z" />
          <path d="M12 9.5c1.4 1.4 1.4 3.6 0 5-1.4-1.4-1.4-3.6 0-5Z" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export function SocialIcon({
  name,
  className = "h-5 w-5",
}: {
  name: SocialLink["icon"];
  className?: string;
}) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "instagram":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8V11H8.5v3H11v7h3Z" />
        </svg>
      );
  }
}

export function SunIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2.5 12H5M19 12h2.5M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

export function MoonIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function ArcDivider({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 400 40"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 4 C 100 40, 300 40, 400 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
