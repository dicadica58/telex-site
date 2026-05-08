interface IconProps {
  name: string;
  size?: number;
  stroke?: number;
}

export default function Icon({ name, size = 24, stroke = 1.6 }: IconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "network":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "building":
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
        </svg>
      );
    case "rent":
      return (
        <svg {...props}>
          <path d="M3 12l9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "doc":
      return (
        <svg {...props}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6M9 17h4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "badge":
      return (
        <svg {...props}>
          <path d="M12 3l2.5 2.5L18 5l.5 3.5L21 11l-2 2.5.5 3.5-3.5-.5L12 21l-2.5-2.5L6 19l-.5-3.5L3 13l2-2.5L4.5 7 8 7.5z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "store":
      return (
        <svg {...props}>
          <path d="M3 9l1-5h16l1 5" />
          <path d="M3 9c0 1.1.9 2 2 2s2-.9 2-2" />
          <path d="M7 9c0 1.1.9 2 2 2s2-.9 2-2" />
          <path d="M11 9c0 1.1.9 2 2 2s2-.9 2-2" />
          <path d="M15 9c0 1.1.9 2 2 2s2-.9 2-2" />
          <path d="M5 11v10h14V11" />
          <path d="M10 21v-6h4v6" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M3 12l9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...props}>
          <path d="M14.7 6.3a4 4 0 0 1 0 5.6l-8 8a2.1 2.1 0 0 1-3-3l8-8a4 4 0 0 1 5.6 0z" />
          <path d="M14 7l3-3M17 4l3 3" />
        </svg>
      );
    case "team":
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17" cy="9" r="2" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "send":
      return (
        <svg {...props}>
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
        </svg>
      );
    case "wpp":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm5.4 14.3c-.2.6-1.3 1.2-1.8 1.2-.5 0-1 .2-3.4-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.4.7-2 1-2.3.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.4-.4.4c-.1.1-.2.2-.1.5.1.2.6 1 1.3 1.7.9.8 1.6 1 1.8 1.1.2.1.4.1.6-.1l.7-.8c.1-.2.3-.2.6-.1l1.9.9c.2.1.4.2.5.3 0 .2 0 .8-.2 1.4z" />
        </svg>
      );
    case "tools":
      return (
        <svg {...props}>
          <path d="M14.7 6.3a4 4 0 0 1 0 5.6l-8 8a2.1 2.1 0 0 1-3-3l8-8a4 4 0 0 1 5.6 0z" />
        </svg>
      );
    case "lifebuoy":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M5 5l4.5 4.5M14.5 14.5L19 19M5 19l4.5-4.5M14.5 9.5L19 5" />
        </svg>
      );
    case "install":
      return (
        <svg {...props}>
          <path d="M12 3v12M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      );
    default:
      return null;
  }
}
