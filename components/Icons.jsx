const icons = {
  doc: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="2.5" width="14" height="17" rx="2" />
      <path d="M8 7h6M8 10.5h6M8 14h3" />
      <path d="M12.5 15.5 14 17l3-3.5" strokeWidth="1.7" />
    </svg>
  ),
  percent: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="7" r="2.4" />
      <circle cx="15" cy="15" r="2.4" />
      <path d="M17.5 4.5 4.5 17.5" />
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M11 2.5 4 5.5v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9v-5l-7-3Z" />
      <circle cx="10" cy="10.5" r="2.2" />
      <path d="m11.8 12.3 2.4 2.4" />
    </svg>
  ),
  chart: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 18.5v-6M9.5 18.5v-10M15 18.5v-4M20 18.5H2.5" />
      <path d="M4 8.5 9.5 4l5.5 6 5-4.5" strokeWidth="1.4" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2.5 7.5 6 11l5.5-8" />
    </svg>
  ),
  clock: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="7.5" cy="7.5" r="6" />
      <path d="M7.5 4.5v3.2l2.2 1.6" />
    </svg>
  ),
  sun: (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8.5" cy="8.5" r="3.4" />
      <path d="M8.5 1.2v2M8.5 13.8v2M1.2 8.5h2M13.8 8.5h2M3.3 3.3l1.4 1.4M12.3 12.3l1.4 1.4M13.7 3.3l-1.4 1.4M4.7 12.3l-1.4 1.4" />
    </svg>
  ),
  moon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13.5 9.8A6 6 0 1 1 6.2 2.5a4.8 4.8 0 0 0 7.3 7.3Z" />
    </svg>
  ),
  menu: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 5.5h14M3 10h14M3 14.5h14" />
    </svg>
  ),
  close: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="m4.5 4.5 11 11M15.5 4.5l-11 11" />
    </svg>
  ),
  phone: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 2.5h3l1.2 3.2-1.7 1.4a9.5 9.5 0 0 0 3.4 3.4l1.4-1.7 3.2 1.2v3a1 1 0 0 1-1.1 1A11.5 11.5 0 0 1 2 3.6a1 1 0 0 1 1-1.1Z" />
    </svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="1.8" y="3" width="12.4" height="10" rx="1.5" />
      <path d="m2.5 4.5 5.5 4.5 5.5-4.5" />
    </svg>
  ),
  pin: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8 14.5S3 9.9 3 6.5a5 5 0 0 1 10 0c0 3.4-5 8-5 8Z" />
      <circle cx="8" cy="6.5" r="1.8" />
    </svg>
  ),
};

export default function Icon({ name }) {
  return icons[name] || null;
}
