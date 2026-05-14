export default function StylizedO() {
  return (
    <span
      className="inline-block relative hover:scale-110 transition-transform duration-300"
      style={{ fontSize: "0.85em" }}
    >
      <svg
        width="0.85em"
        height="0.85em"
        viewBox="0 0 24 24"
        fill="none"
        className="inline-block align-middle"
      >
        <defs>
          <linearGradient id="oGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="url(#oGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="5" fill="url(#oGradient)" opacity="0.6" />
      </svg>
    </span>
  );
}
