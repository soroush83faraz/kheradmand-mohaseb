import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { standardGroups, opinionTypes } from '@/lib/standards';
import standardsImg from '@/public/images/standards-desk.jpg';

export const metadata = {
  title: 'استانداردهای حسابرسی',
  description:
    'آشنایی با استانداردهای حسابرسی ایران و انواع اظهارنظر حسابرس — مبنای تمام رسیدگی‌های مؤسسه خردمند محاسب ارقام.',
};

export default function StandardsPage() {
  return (
    <>
      <PageIntro
        eyebrow="استانداردهای حسابرسی"
        title="مبنای کار ما، استاندارد است؛ نه سلیقه."
        lead="استانداردهای حسابرسی ایران توسط سازمان حسابرسی و بر پایه استانداردهای بین‌المللی (ISA) تدوین شده‌اند. تمام رسیدگی‌های مؤسسه طبق همین استانداردها انجام و گزارش می‌شود."
      />

      <section className="block">
        <div className="wrap split">
          <Reveal className="split-media">
            <Image
              src={standardsImg}
              alt="اسناد مالی، نمودار و ماشین‌حساب روی میز کار حسابرسی"
              placeholder="blur"
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal className="split-body">
            <h2>چرا استاندارد مهم است؟</h2>
            <p>
              اعتبار گزارش حسابرسی از اینجا می‌آید که هر مرحله‌اش — از برنامه‌ریزی تا
              اظهارنظر — طبق ضابطه مشخص و قابل‌دفاع انجام شده باشد. وقتی بانک، سازمان
              امور مالیاتی یا سرمایه‌گذار گزارشی را می‌پذیرد، در واقع به همین
              استانداردها اعتماد کرده است.
            </p>
            <p>
              در ادامه مهم‌ترین استانداردهایی که در هر پروژه به کار می‌گیریم را به زبان
              ساده معرفی کرده‌ایم.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="block on-surface">
        <div className="wrap">
          {standardGroups.map((group) => (
            <Reveal className="std-group" key={group.title}>
              <h2>{group.title}</h2>
              <div className="std-list">
                {group.items.map((s) => (
                  <div className="std-row" key={s.no}>
                    <span className="no display-num">{s.no}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">نتیجه رسیدگی</p>
            <h2>چهار نوع اظهارنظر حسابرس</h2>
            <p>خروجی نهایی هر حسابرسی، یکی از این چهار اظهارنظر است.</p>
          </Reveal>
          <div className="opinions">
            {opinionTypes.map((o) => (
              <Reveal className={`opinion tone-${o.tone}`} key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-foot">
            <Link className="btn btn-ghost" href="/services/financial-audit">
              درباره حسابرسی صورت‌های مالی بیشتر بدانید ←
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand title="می‌خواهید گزارش بعدی شرکت‌تان «مقبول» باشد؟ از همین امروز شروع کنیم." />
    </>
  );
}
