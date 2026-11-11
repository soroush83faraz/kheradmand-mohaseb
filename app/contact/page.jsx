import Image from 'next/image';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/Icons';
import { site } from '@/lib/site';
import { contactImage } from '@/lib/images';

export const metadata = {
  title: 'تماس با ما',
  description:
    'درخواست مشاوره رایگان از مؤسسه خردمند محاسب ارقام — پاسخ‌گویی در کمتر از یک روز کاری.',
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="گفت‌وگو را شروع کنیم."
        lead="فرم را پر کنید یا مستقیم تماس بگیرید — در کمتر از یک روز کاری پاسخ می‌دهیم و جلسه شناخت اولیه رایگان است."
      />
      <section className="block">
        <div className="wrap contact-grid">
          <Reveal className="contact-info">
            <div className="contact-img">
              <Image
                src={contactImage.src}
                alt={contactImage.alt}
                placeholder="blur"
                sizes="(max-width: 860px) 100vw, 40vw"
              />
            </div>
            <div className="row">
              <Icon name="pin" />
              <span>
                {site.address}
                <br />
                کد پستی: <span className="ltr-num">{site.postalCode}</span>
              </span>
            </div>
            {site.phone ? (
              <div className="row">
                <Icon name="phone" />
                <span className="ltr-num">{site.phone}</span>
              </div>
            ) : null}
            {site.email ? (
              <div className="row">
                <Icon name="mail" />
                <span>{site.email}</span>
              </div>
            ) : null}
            {site.workHours ? (
              <div className="row">
                <Icon name="clock" />
                <span>{site.workHours}</span>
              </div>
            ) : null}
          </Reveal>
          <Reveal>
            {site.email ? <ContactForm /> : null}
          </Reveal>
        </div>
      </section>
    </>
  );
}
