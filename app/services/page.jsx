import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import CtaBand from '@/components/CtaBand';
import { services } from '@/lib/services';

export const metadata = {
  title: 'خدمات',
  description:
    'خدمات مؤسسه خردمند محاسب ارقام: حسابرسی صورت‌های مالی، خدمات مالیاتی، حسابرسی داخلی و ویژه، حسابداری و مشاوره مالی.',
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="چهار حوزه، یک استاندارد: دقت."
        lead="هر خدمت با همان سخت‌گیری حرفه‌ای انجام می‌شود — از حسابرسی قانونی تا مشاوره مالی. روی هر خدمت بزنید تا جزئیات کامل آن را ببینید."
      />
      <section className="block">
        <div className="wrap">
          <div className="services two-col">
            {services.map((s) => (
              <Reveal key={s.slug}>
                <Link className="svc" href={`/services/${s.slug}`} style={{ height: '100%' }}>
                  <span className="icon">
                    <Icon name={s.icon} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.lead}</p>
                  <span className="more">جزئیات خدمت ←</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="مطمئن نیستید کدام خدمت مناسب شماست؟ در یک گفت‌وگوی کوتاه مشخصش می‌کنیم." />
    </>
  );
}
