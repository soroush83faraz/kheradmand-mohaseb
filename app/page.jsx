import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import CtaBand from '@/components/CtaBand';
import { services } from '@/lib/services';
import { posts } from '@/lib/posts';
import { faqGroups } from '@/lib/faq';

const steps = [
  { title: 'گفت‌وگوی اولیه', desc: 'نیاز شما و ساختار مالی شرکت را می‌شناسیم.' },
  { title: 'برآورد و قرارداد', desc: 'دامنه کار، زمان‌بندی و حق‌الزحمه شفاف مشخص می‌شود.' },
  { title: 'اجرای عملیات', desc: 'تیم حسابرسی طبق برنامه، اسناد و مدارک را رسیدگی می‌کند.' },
  { title: 'گزارش و یافته‌ها', desc: 'گزارش حسابرس همراه با نکات اصلاحی ارائه می‌شود.' },
  { title: 'همراهی پس از گزارش', desc: 'برای اجرای اصلاحات و جلسات مجمع کنار شما می‌مانیم.' },
];

const homeFaq = faqGroups.flatMap((g) => g.items).slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="digits-bg" aria-hidden="true">
          <span style={{ fontSize: 280, top: -40, left: '4%' }}>۷</span>
          <span style={{ fontSize: 200, bottom: -30, right: -20 }}>۳</span>
          <span style={{ fontSize: 150, top: '40%', left: '38%' }}>۹</span>
        </div>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">مؤسسه حسابرسی و خدمات مالی</p>
            <h1>
              پشتِ هر عددِ درست،
              <br />
              یک تصمیمِ <em>خردمندانه</em> است.
            </h1>
            <p className="lead">
              «خردمند محاسب ارقام» با تیمی از حسابداران و حسابرسان باتجربه، حسابرسی
              صورت‌های مالی، خدمات مالیاتی و مشاوره مالی را با دقت، استقلال و محرمانگی
              کامل انجام می‌دهد.
            </p>
            <div className="cta-row">
              <Link className="btn btn-solid" href="/contact">
                درخواست مشاوره رایگان
              </Link>
              <Link className="btn btn-ghost" href="/services">
                آشنایی با خدمات
              </Link>
            </div>
            <p className="note">
              <Icon name="clock" />
              پاسخ‌گویی به درخواست‌ها در کمتر از یک روز کاری
            </p>
          </Reveal>
          <Reveal className="report-wrap">
            <div className="report" aria-hidden="true">
              <div className="rhead">
                <b>گزارش حسابرس مستقل</b>
                <span>سال مالی ۱۴۰۴</span>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td className="lbl">دارایی‌های جاری</td>
                    <td className="num">۱۲٬۴۸۰</td>
                  </tr>
                  <tr>
                    <td className="lbl">بدهی‌های جاری</td>
                    <td className="num">۴٬۹۳۲</td>
                  </tr>
                  <tr>
                    <td className="lbl">حقوق مالکانه</td>
                    <td className="num">۷٬۵۴۸</td>
                  </tr>
                  <tr>
                    <td className="lbl">سود خالص دوره</td>
                    <td className="num">۲٬۱۱۶</td>
                  </tr>
                </tbody>
              </table>
              <div className="verdict">
                <span className="chip">
                  <Icon name="check" />
                  اظهارنظر: مقبول
                </span>
                <small>مطابق استانداردهای حسابرسی ایران</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="stats">
        <div className="wrap">
          <Reveal className="stat">
            <b>۱۵+</b>
            <span>سال تجربه حرفه‌ای</span>
          </Reveal>
          <Reveal className="stat">
            <b>۱۲۰+</b>
            <span>شرکت و مؤسسه</span>
          </Reveal>
          <Reveal className="stat">
            <b>۴</b>
            <span>حوزه تخصصی خدمات</span>
          </Reveal>
          <Reveal className="stat">
            <b>۱۰۰٪</b>
            <span>استقلال و محرمانگی</span>
          </Reveal>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">خدمات مؤسسه</p>
            <h2>چهار حوزه، یک استاندارد: دقت.</h2>
            <p>از حسابرسی قانونی تا مشاوره مالی — هر خدمت با همان سخت‌گیری حرفه‌ای انجام می‌شود.</p>
          </Reveal>
          <div className="services">
            {services.map((s) => (
              <Reveal key={s.slug}>
                <Link className="svc" href={`/services/${s.slug}`} style={{ height: '100%' }}>
                  <span className="icon">
                    <Icon name={s.icon} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="more">جزئیات خدمت ←</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block on-surface">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">فرایند همکاری</p>
            <h2>شفاف از روز اول تا تحویل گزارش.</h2>
          </Reveal>
          <div className="steps">
            {steps.map((st, i) => (
              <Reveal className="step" key={st.title}>
                <span className="no">{['۱', '۲', '۳', '۴', '۵'][i]}</span>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-foot">
            <Link className="btn btn-ghost" href="/process">
              جزئیات کامل فرایند کار ←
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="block band">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">چرا خردمند محاسب ارقام</p>
            <h2>حسابرسی، کارِ اعتماد است.</h2>
          </Reveal>
          <div className="why">
            <Reveal className="item">
              <h3>استقلال و بی‌طرفی</h3>
              <p>
                اظهارنظر ما فقط بر پایه شواهد و استانداردهاست؛ نه هیچ‌چیز دیگر. استقلال
                حرفه‌ای، خط قرمز مؤسسه است.
              </p>
            </Reveal>
            <Reveal className="item">
              <h3>تیم حرفه‌ای</h3>
              <p>
                حسابداران رسمی و کارشناسان مالیاتی با سابقه اجرایی در صنایع تولیدی،
                بازرگانی و پیمانکاری.
              </p>
            </Reveal>
            <Reveal className="item">
              <h3>محرمانگی کامل</h3>
              <p>
                اطلاعات مالی شما نزد ما امانت است. تعهد محرمانگی، بخش جدانشدنی هر قرارداد
                ماست.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">مقالات و راهنماها</p>
            <h2>تازه‌ترین مطالب تخصصی</h2>
            <p>پاسخ روشن به پرسش‌های مالی و مالیاتی — به زبان ساده، بدون اصطلاح‌بازی.</p>
          </Reveal>
          <div className="posts">
            {posts.slice(0, 3).map((p) => (
              <Reveal key={p.slug}>
                <Link className="post" href={`/blog/${p.slug}`} style={{ height: '100%' }}>
                  <span className="cat">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <time>{p.date}</time>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-foot">
            <Link className="btn btn-ghost" href="/blog">
              همه مقالات ←
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="block on-surface">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">پرسش‌های متداول</p>
            <h2>پیش از تماس، پاسخ‌ها را ببینید.</h2>
          </Reveal>
          <Reveal className="faq">
            {homeFaq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
          <Reveal className="sec-foot">
            <Link className="btn btn-ghost" href="/faq">
              همه پرسش‌ها ←
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
