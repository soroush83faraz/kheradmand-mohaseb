import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="block">
      <div className="wrap" style={{ textAlign: 'center', paddingBlock: 80 }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>
          خطای ۴۰۴
        </p>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBlock: 16 }}>
          چنین صفحه‌ای پیدا نشد.
        </h1>
        <p style={{ color: 'var(--ink-2)', marginBlockEnd: 28 }}>
          آدرس را اشتباه وارد کرده‌اید یا صفحه جابه‌جا شده است.
        </p>
        <Link className="btn btn-solid" href="/">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </section>
  );
}
