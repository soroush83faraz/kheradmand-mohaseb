import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import CtaBand from '@/components/CtaBand';
import { services, getService } from '@/lib/services';
import { serviceImages } from '@/lib/images';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageIntro eyebrow="خدمات مؤسسه" title={service.title} lead={service.lead} />
      <section className="block">
        <div className="wrap svc-detail">
          {serviceImages[service.slug] ? (
            <Reveal className="svc-img">
              <Image
                src={serviceImages[service.slug].src}
                alt={serviceImages[service.slug].alt}
                priority
                placeholder="blur"
                sizes="(max-width: 860px) 100vw, 760px"
              />
            </Reveal>
          ) : null}
          <Reveal className="intro">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          {service.sections.map((sec) => (
            <Reveal key={sec.title}>
              <h2>{sec.title}</h2>
              {sec.type === 'list' ? (
                <ul className="check-list">
                  {sec.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{sec.body}</p>
              )}
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title={`برای شروع ${service.title}، یک جلسه شناخت رایگان کافی است.`} />
    </>
  );
}
