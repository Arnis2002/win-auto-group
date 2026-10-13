import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRightIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { dealership, addressLine } from '../data/dealership';
import { editorialPhotos } from '../data/editorialPhotos';
import { vehicles } from '../data/vehicles';
import { VehiclePhoto } from '../components/VehiclePhoto';
import { PhotoCredit } from '../components/PhotoCredit';
import { HoursList } from '../components/visit/HoursList';
import { ContactForm } from '../components/visit/ContactForm';
import { btn, container, textLink } from '../utils/styles';
import type { Photo } from '../types/vehicle';

const services = [
{ title: 'Used vehicle inventory', text: 'Browse the dealership’s current selection of cars, trucks, and SUVs.', to: '/inventory', cta: 'Browse inventory' },
{ title: 'Financing', text: 'The dealership advertises financing options for students, newcomers, and buyers with limited or no credit history. Confirm eligibility directly.', to: '/financing', cta: 'Explore financing' },
{ title: 'Trade appraisal', text: 'Trade-ins are welcome. Ask the team to appraise your current vehicle.', to: '/sell-or-trade', cta: 'Appraise my trade' },
{ title: 'Extended warranties', text: 'Optional extended warranty plans are advertised. Contact Win Auto Group for current coverage and terms.', to: '/about?topic=visit#contact', cta: 'Ask the dealership' }];


export function AboutVisit() {
  usePageMeta('Dealership and visit', 'Visit Win Auto Group at 17315 Yonge St in Newmarket, Ontario. Find contact details, directions, inventory, and financing.');
  const [params] = useSearchParams();
  const topic = params.get('topic') ?? 'visit';

  const credits = useMemo(() => {
    const all: Photo[] = [...Object.values(editorialPhotos), ...vehicles.flatMap((v) => v.photos)];
    return Array.from(new Map(all.map((p) => [p.file, p])).values());
  }, []);

  return (
    <>
      <section className={`${container} pt-12 lg:pt-16`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-6">
            <h1 className="font-serif text-[44px] leading-[1.02] tracking-[-0.015em] sm:text-[60px]">On Yonge Street in Newmarket.</h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed">
              Win Auto Group is a used-car dealership at 17315 Yonge Street in Newmarket, Ontario. Its online inventory includes cars, trucks, and SUVs.
            </p>
            <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-ink-soft">
              The dealership website offers financing inquiries and trade appraisal requests. Call to confirm current hours, vehicle availability, and visit details.
            </p>
          </div>
          <figure className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded bg-line/40">
              <VehiclePhoto photo={editorialPhotos.interior} priority sizes="(min-width: 1024px) 45vw, 100vw" className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-2"><PhotoCredit photo={editorialPhotos.interior} prefix="Vehicle photo" /></figcaption>
          </figure>
        </div>
      </section>

      <section className={`${container} py-20`} aria-labelledby="services-title">
        <h2 id="services-title" className="font-serif text-[34px] leading-tight">What you can do here</h2>
        <ul className="mt-6 border-t border-ink">
          {services.map((s) =>
          <li key={s.title} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[minmax(0,240px)_minmax(0,1fr)_auto] sm:items-center sm:gap-8">
              <p className="text-[17px] font-semibold">{s.title}</p>
              <p className="text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
              <Link to={s.to} className="inline-flex items-center gap-1.5 text-[15px] font-medium text-forest hover:underline">
                {s.cta} <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          )}
        </ul>
      </section>

      <section id="buying" className="on-dark scroll-mt-24 bg-forest text-ivory" aria-labelledby="buying-title">
        <div className={`${container} grid gap-8 py-16 lg:grid-cols-12`}>
          <div className="lg:col-span-4">
            <h2 id="buying-title" className="font-serif text-[34px] leading-tight sm:text-[40px]">Before you buy</h2>
            <p className="mt-2 text-sm text-ivory/75">Read the dealership’s terms and confirm all fees.</p>
          </div>
          <div className="space-y-4 text-[16px] leading-relaxed text-ivory/90 lg:col-span-7 lg:col-start-6">
            <p>{dealership.inventoryDisclosure}</p>
            <p className="text-ivory/75">Vehicle information and fees may change. Review the original listing and speak with Win Auto Group before making a purchase decision.</p>
          </div>
        </div>
      </section>

      <section id="visit" className={`${container} scroll-mt-24 py-20`} aria-labelledby="visit-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 id="visit-title" className="font-serif text-[34px] leading-tight sm:text-[40px]">Visit</h2>
            <p className="mt-5 flex items-start gap-2 text-[17px]">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-forest" aria-hidden="true" /> {addressLine}
            </p>
            <a href={dealership.phoneHref} className="mt-3 flex items-center gap-2 text-[22px] font-semibold tnum hover:underline">
              <PhoneIcon className="h-5 w-5 text-forest" aria-hidden="true" /> {dealership.phoneDisplay}
            </a>
            <p className="text-sm text-ink-soft">Sales</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={dealership.directionsUrl} target="_blank" rel="noreferrer" className={btn.primary}>Get directions</a>
              <a href={dealership.phoneHref} className={btn.secondary}>Call sales</a>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-semibold">Business hours</h3>
              <div className="mt-2"><HoursList /></div>
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              <a href={dealership.reviewsUrl} target="_blank" rel="noreferrer" className={textLink}>Read customer reviews online</a>
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden rounded border border-line bg-line/40 lg:aspect-auto lg:h-full lg:min-h-[480px]">
              <iframe
                title={`Map showing ${addressLine}`}
                src={dealership.mapEmbedUrl}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
              
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-line bg-paper" aria-labelledby="contact-title">
        <div className={`${container} grid gap-10 py-16 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-5">
            <h2 id="contact-title" className="font-serif text-[34px] leading-tight sm:text-[40px]">Send a message</h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink-soft">
              Plan a visit, ask a question, or describe a car you’d like the team to look for.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ContactForm initialTopic={topic} />
          </div>
        </div>
      </section>

      <section id="credits" className={`${container} scroll-mt-24 py-14`} aria-labelledby="credits-title">
        <h2 id="credits-title" className="text-[15px] font-semibold">Photo credits</h2>
        <p className="mt-1 max-w-2xl text-sm text-ink-soft">
          Vehicle photos are linked to Win Auto Group’s original listings. Listing photos, vehicle details, and availability may change; use the links to confirm current information.
        </p>
        <ul className="mt-4 grid gap-x-8 gap-y-1.5 text-[13px] sm:grid-cols-2 lg:grid-cols-3">
          {credits.map((p) =>
          <li key={p.file} className="min-w-0">
              <a href={p.sourcePage ?? p.file} target="_blank" rel="noreferrer" className="block truncate text-ink-soft hover:text-ink hover:underline">
                {p.author}: {p.alt}
              </a>
            </li>
          )}
        </ul>
      </section>
    </>);

}