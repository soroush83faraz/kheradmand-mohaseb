export default function BrandMark({ size = 42 }) {
  return (
    <span className="mark" style={{ width: size, height: size }} aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="12" width="4" height="7" rx="1" fill="#8FA1B3" />
        <rect x="9" y="8" width="4" height="11" rx="1" fill="#D2A147" />
        <rect x="15" y="4" width="4" height="15" rx="1" fill="#8FA1B3" />
      </svg>
    </span>
  );
}
