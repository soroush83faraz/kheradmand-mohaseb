'use client';

import { useEffect, useState } from 'react';
import Icon from './Icons';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(saved);
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('kma-theme', next);
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'تغییر به حالت روز' : 'تغییر به حالت شب'}
      title={theme === 'dark' ? 'حالت روز' : 'حالت شب'}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  );
}
