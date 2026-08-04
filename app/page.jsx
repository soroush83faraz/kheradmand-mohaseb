import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import CtaBand from '@/components/CtaBand';
import { services } from '@/lib/services';
import { posts } from '@/lib/posts';
import { faqGroups } from '@/lib/faq';
import { site } from '@/lib/site';
import heroImg from '@/public/images/hero-team.jpg';
import standardsImg from '@/public/images/standards-desk.jpg';

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
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">مؤسسه حسابرسی و خدمات مالی</p>
            <h1>
              حسابرسی و امور مالی شرکت شما،
              <br />
              دستِ <em>حرفه‌ای‌ها</em>.
            </h1>
            <p className="lead">
              از حسابرسی صورت‌های مالی و بازرس قانونی تا امور مالیاتی و حسابداری —
              گزارش‌هایی که بانک‌ها و سازمان امور مالیاتی می‌پذیرند؛ برای شرکت‌های سراسر
              ایران.
            </p>
            <div className="cta-row">
              <Link className="btn btn-solid" href="/contact">
                درخواست مشاوره رایگان
              </Link>
              <Link className="btn btn-ghost" href="/services">
                مشاهده خدمات
              </Link>
            </div>
            <ul className="bullets">
              <li>
                <Icon name="check" />
                جلسه اول رایگان
              </li>
              <li>
                <Icon name="check" />
                پاسخ در کمتر از یک روز کاری
              </li>
              <li>
                <Icon name="check" />
                محرمانگی کامل
              </li>
            </ul>
          </Reveal>
          <Reveal className="hero-media">
            <Image
              src={heroImg}
              alt="جلسه کاری تیم حسابرسی با مدیران شرکت"
              priority
              placeholder="blur"
              sizes="(max-width: 860px) 100vw, 45vw"
            />
            <div className="hero-badge">
              <span className="chip">
                <Icon name="check" />
                مطابق استانداردهای حسابرسی ایران
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">خدمات مؤسسه</p>
            <h2>چه کمکی از ما برمی‌آید؟</h2>
            <p>چهار حوزه خدمت — روی هر کدام بزنید تا جزئیات، مخاطبان و خروجی آن را ببینید.</p>
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
        <div className="wrap split">
          <Reveal className="split-media">
            <Image
              src={standardsImg}
              alt="اسناد مالی و ماشین‌حساب روی میز کار حسابرسی"
              placeholder="blur"
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal className="split-body">
            <p className="eyebrow">استانداردهای حسابرسی</p>
            <h2>مبنای کار ما استاندارد است، نه سلیقه.</h2>
            <p>
              تمام رسیدگی‌ها طبق استانداردهای حسابرسی ایران — از برنامه‌ریزی و
              نمونه‌گیری تا اظهارنظر نهایی — انجام می‌شود. به همین دلیل گزارش‌های مؤسسه
              برای بانک‌ها و مراجع نظارتی قابل استناد است.
            </p>
            <div className="sec-foot">
              <Link className="btn btn-ghost" href="/standards">
                آشنایی با استانداردها ←
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="stats">
        <div className="wrap">
          <Reveal className="stat">
            <b className="display-num">۱۵+</b>
            <span>سال تجربه حرفه‌ای</span>
          </Reveal>
          <Reveal className="stat">
            <b className="display-num">۱۲۰+</b>
            <span>شرکت و مؤسسه</span>
          </Reveal>
          <Reveal className="stat">
            <b className="display-num">۴</b>
            <span>حوزه تخصصی خدمات</span>
          </Reveal>
          <Reveal className="stat">
            <b className="display-num">۱۰۰٪</b>
            <span>استقلال و محرمانگی</span>
          </Reveal>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">فرایند همکاری</p>
            <h2>شفاف از روز اول تا تحویل گزارش.</h2>
          </Reveal>
          <div className="steps">
            {steps.map((st, i) => (
              <Reveal className="step" key={st.title}>
                <span className="no display-num">{['۱', '۲', '۳', '۴', '۵'][i]}</span>
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
