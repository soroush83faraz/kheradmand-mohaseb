import Link from 'next/link';
import { site } from '@/lib/site';

export default function CtaBand({
  title = 'برای گفت‌وگو درباره وضعیت مالی شرکت‌تان آماده‌ایم.',
}) {
  return (
    <div className="cta-band">
      <div className="wrap">
        <h2>{title}</h2>
        <div className="side">
          {site.phone ? <span className="phone ltr-num">{site.phone}</span> : null}
          <Link className="btn btn-solid" href="/contact">
            درخواست مشاوره رایگان
          </Link>
        </div>
      </div>
    </div>
  );
}
