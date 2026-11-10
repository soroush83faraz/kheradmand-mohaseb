import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: 'فرایند کار',
  description:
    'فرایند پنج مرحله‌ای همکاری با مؤسسه خردمند محاسب ارقام — از گفت‌وگوی اولیه تا صدور گزارش و همراهی پس از آن.',
};

const steps = [
  {
    title: 'گفت‌وگوی اولیه و شناخت',
    desc: 'در یک جلسه رایگان، فعالیت شرکت، سیستم حسابداری فعلی و هدف شما از حسابرسی را می‌شناسیم و ابعاد پروژه مشخص می‌شود. همین‌جا معلوم می‌شود دقیقاً به کدام خدمت نیاز دارید.',
  },
  {
    title: 'برآورد و قرارداد',
    desc: 'دامنه کار، زمان‌بندی و حق‌الزحمه به‌صورت مکتوب و شفاف اعلام می‌شود. هیچ هزینه‌ای خارج از قرارداد وجود ندارد و هر تغییری در دامنه کار، پیش از اجرا با شما توافق می‌شود.',
  },
  {
    title: 'ارزیابی ریسک و اجرای عملیات',
    desc: 'تیم رسیدگی ابتدا نقاط پرریسک سیستم مالی را ارزیابی می‌کند، سپس با نمونه‌گیری علمی از اسناد، بررسی عینی موجودی‌ها و تطبیق حساب‌ها، عملیات حسابرسی را طبق برنامه اجرا می‌کند.',
  },
  {
    title: 'بررسی یافته‌ها و گزارش',
    desc: 'مغایرت‌ها پیش از نهایی‌شدن با مدیریت در میان گذاشته می‌شود تا تعدیلات لازم انجام شود. سپس گزارش رسمی حسابرس همراه با بندهای اصلاحی صادر می‌شود.',
  },
  {
    title: 'همراهی پس از گزارش',
    desc: 'کار ما با تحویل گزارش تمام نمی‌شود: برای اجرای اصلاحات، پاسخ به پرسش‌های بانک و مراجع، و حضور در جلسات مجمع کنار شما می‌مانیم.',
  },
];

const docs = [
  'صورت‌های مالی دوره مورد رسیدگی',
  'دفاتر قانونی (روزنامه و کل)',
  'تراز آزمایشی در سطوح کل، معین و تفصیلی',
  'اسناد حسابداری و ضمائم',
  'گردش حساب‌های بانکی و صورت مغایرت',
  'قراردادها و اسناد تسهیلات',
  'فاکتورهای خرید و فروش',
  'لیست حقوق و بیمه کارکنان',
];

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        title="شفاف از روز اول تا تحویل گزارش."
        lead="پنج مرحله مشخص، بدون ابهام و بدون هزینه پنهان — این مسیری است که هر پروژه در مؤسسه طی می‌کند."
      />
      <section className="block">
        <div className="wrap">
          <div className="steps-detail">
            {steps.map((st, i) => (
              <Reveal className="step-row" key={st.title}>
                <span className="no">{['۱', '۲', '۳', '۴', '۵'][i]}</span>
                <div>
                  <h3>{st.title}</h3>
                  <p>{st.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="block on-surface">
        <div className="wrap svc-detail">
          <Reveal className="sec-head">
            <h2>چه مدارکی لازم است؟</h2>
            <p>
              اگر این موارد آماده باشند، زمان و هزینه رسیدگی به‌طور محسوسی کم می‌شود.
              فهرست دقیق برای شرکت شما در جلسه اول مشخص می‌شود.
            </p>
          </Reveal>
          <Reveal>
            <ul className="check-list">
              {docs.map((d) => (
                <li key={d}>
                  <Icon name="check" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="sec-foot">
            <Link className="btn btn-ghost" href="/blog/audit-required-documents">
              چک‌لیست کامل مدارک را بخوانید ←
            </Link>
          </Reveal>
        </div>
      </section>
      <CtaBand title="آماده شروع هستید؟ مرحله اول رایگان است." />
    </>
  );
}
