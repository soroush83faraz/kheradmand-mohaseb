'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/site';
import BrandMark from './BrandMark';
import ThemeToggle from './ThemeToggle';
import Icon from './Icons';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" href="/">
          <BrandMark />
          <span>
            <span className="name">{site.name}</span>
            <br />
            <span className="sub">{site.tagline}</span>
          </span>
        </Link>

        <nav className={`menu ${open ? 'open' : ''}`} aria-label="منوی اصلی">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
          <Link className="btn btn-solid menu-cta" href="/contact">
            درخواست مشاوره
          </Link>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link className="btn btn-solid desktop-cta" href="/contact">
            درخواست مشاوره
          </Link>
          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
