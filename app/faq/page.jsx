import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { faqGroups } from '@/lib/faq';

export const metadata = {
  title: 'پرسش‌های متداول',
  description:
    'پاسخ به پرسش‌های رایج درباره حسابرسی، هزینه و زمان رسیدگی، مدارک لازم و اعتبار گزارش‌های حسابرسی.',
};

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="پرسش‌های متداول"
        title="پیش از تماس، پاسخ‌ها را ببینید."
        lead="پرتکرارترین سؤال‌های مدیران درباره حسابرسی و خدمات مالی — اگر پاسخ سؤال‌تان اینجا نبود، از صفحه تماس بپرسید."
      />
      <section className="block">
        <div className="wrap faq">
          {faqGroups.map((group) => (
            <Reveal className="faq-group" key={group.title}>
              <h2>{group.title}</h2>
              {group.items.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title="سؤال‌تان را اینجا پیدا نکردید؟ مستقیم از خودمان بپرسید." />
    </>
  );
}
