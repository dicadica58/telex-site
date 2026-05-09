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
    case "camera":
      return (
        <svg {...props}>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case "bellring":
      return (
        <svg {...props}>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          <path d="M4 2C2.8 3.7 2 5.7 2 8" />
          <path d="M22 8c0-2.3-.8-4.3-2-6" />
        </svg>
      );
    case "zap":
      return (
        <svg {...props}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "keyround":
      return (
        <svg {...props}>
          <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
          <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
      );
    case "cable":
      return (
        <svg {...props}>
          <path d="M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2H4z" />
          <path d="M3 5V3" />
          <path d="M7 5V3" />
          <path d="M19 15a2 2 0 0 0 2-2v-2h-6v2a2 2 0 0 0 2 2h2z" />
          <path d="M17 21v-2" />
          <path d="M21 21v-2" />
          <path d="M5 9v4a4 4 0 0 0 4 4h6" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...props}>
          <path d="M12 20h.01" />
          <path d="M2 8.82a15 15 0 0 1 20 0" />
          <path d="M5 12.86a10 10 0 0 1 14 0" />
          <path d="M8.5 16.93a5 5 0 0 1 7 0" />
        </svg>
      );
    case "phonecall":
      return (
        <svg {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14.05 2a9 9 0 0 1 8 7.94" />
          <path d="M14.05 6A5 5 0 0 1 18 10" />
        </svg>
      );
    case "video":
      return (
        <svg {...props}>
          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
          <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
      );
    case "smartphone":
      return (
        <svg {...props}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    default:
      return null;
  }
}
