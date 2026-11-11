import Link from 'next/link';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import BrandMark from './BrandMark';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="brand">
              <BrandMark />
              <span>
                <span className="name">{site.name}</span>
              </span>
            </div>
            <p className="about">
              مؤسسه حسابرسی و خدمات مالی — حسابرسی مستقل، خدمات مالیاتی و مشاوره مالی برای
              شرکت‌های ایرانی.
            </p>
          </div>
          <div>
            <h4>خدمات</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>دسترسی سریع</h4>
            <ul>
              <li>
                <Link href="/blog">مقالات</Link>
              </li>
              <li>
                <Link href="/faq">پرسش‌های متداول</Link>
              </li>
              <li>
                <Link href="/process">فرایند کار</Link>
              </li>
              <li>
                <Link href="/about">درباره ما</Link>
              </li>
              <li>
                <Link href="/contact">تماس با ما</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>تماس</h4>
            <ul>
              <li>{site.address}</li>
              <li>
                کد پستی: <span className="ltr-num">{site.postalCode}</span>
              </li>
              {site.phone ? <li className="ltr-num">{site.phone}</li> : null}
              {site.email ? <li>{site.email}</li> : null}
              {site.workHours ? <li>{site.workHours}</li> : null}
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© ۱۴۰۵ مؤسسه {site.name} — همه حقوق محفوظ است.</span>
        </div>
      </div>
    </footer>
  );
}
