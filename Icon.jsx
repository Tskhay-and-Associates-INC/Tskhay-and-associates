// Simple line icons drawn for this site (24 x 24 grid, 1.5px stroke).
const paths = {
  structure: (
    <>
      <rect x="9" y="3" width="6" height="4.5" rx="1" />
      <rect x="2.5" y="16.5" width="6" height="4.5" rx="1" />
      <rect x="15.5" y="16.5" width="6" height="4.5" rx="1" />
      <path d="M12 7.5v4.5M5.5 16.5V12h13v4.5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19.5c.6-3.1 2.8-5 5.5-5s4.9 1.9 5.5 5" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.6 14.3c2.4.3 4.2 2.1 4.8 5" />
    </>
  ),
  balance: (
    <>
      <path d="M12 4v16M8 20h8M4.5 7h15" />
      <path d="M4.5 7 2 13a2.5 2.5 0 0 0 5 0L4.5 7Z" />
      <path d="M19.5 7 17 13a2.5 2.5 0 0 0 5 0l-2.5-6Z" />
    </>
  ),
  literacy: (
    <>
      <path d="M12 6.5C10.5 5 8 4.5 4 4.5v13c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-13c-4 0-6.5.5-8 2Z" />
      <path d="M12 6.5v13" />
    </>
  ),
  decide: (
    <>
      <path d="M3 21h18" />
      <path d="M7 17v-6" />
      <path d="M12 17V5" />
      <path d="M17 17v-9" />
    </>
  ),
  momentum: (
    <>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  predict: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  partnership: (
    <>
      <circle cx="9" cy="12" r="5.5" />
      <circle cx="15" cy="12" r="5.5" />
    </>
  ),
  rigor: (
    <>
      <path d="M4 4v16h16" />
      <path d="m7.5 14.5 3.5-4 3 2.5 4.5-5.5" />
    </>
  ),
  clarity: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5 5" />
    </>
  ),
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export default function Icon({ name, size = 28, strokeWidth = 1.5, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
