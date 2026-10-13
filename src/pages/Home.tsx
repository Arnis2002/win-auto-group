import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { usePageMeta } from '../hooks/usePageMeta';
import { vehicles } from '../data/vehicles';
import { editorialPhotos } from '../data/editorialPhotos';
import { dealership, addressLine } from '../data/dealership';
import { VehiclePhoto } from '../components/VehiclePhoto';
import { PhotoCredit } from '../components/PhotoCredit';
import { HeroSearch } from '../components/home/HeroSearch';
import { VehicleCard } from '../components/vehicles/VehicleCard';
import { Reveal } from '../components/Reveal';
import { HoursList } from '../components/visit/HoursList';
import { buildInventoryHref } from '../utils/inventoryFilters';
import { estimatePayment } from '../utils/payment';
import { formatCurrency } from '../utils/format';
import { ILLUSTRATIVE_APR } from '../components/finance/PaymentCalculator';
import { btn, container, textLink } from '../utils/styles';

const budgets = [30000, 40000, 50000];

export function Home() {
  const reduceMotion = useReducedMotion();
  usePageMeta(
    'Used cars, trucks, and SUVs in Newmarket',
    'Browse Win Auto Group inventory in Newmarket, Ontario. Check vehicle details, contact the dealership, and plan a visit.'
  );

  const featured = vehicles.filter((v) => v.featured).slice(0, 6);

  const needs = useMemo(
    () =>
    [
    { label: 'SUVs', note: 'Room for people, gear, and snow days.', match: vehicles.filter((v) => v.bodyStyle === 'SUV'), href: buildInventoryHref({ bodies: ['SUV'] }) },
    { label: 'Sedans', note: 'Comfortable commuters and quick weekend cars.', match: vehicles.filter((v) => v.bodyStyle === 'Sedan'), href: buildInventoryHref({ bodies: ['Sedan'] }) },
    { label: 'Electric', note: 'Battery-electric cars and SUVs.', match: vehicles.filter((v) => v.fuelType === 'Electric'), href: buildInventoryHref({ fuels: ['Electric'] }) }].
    filter((n) => n.match.length > 0),
    []
  );
  const budgetLinks = budgets.
  map((b) => ({ amount: b, count: vehicles.filter((v) => v.price != null && v.price <= b).length })).
  filter((b) => b.count > 0);

  return (
    <>
      {/* Hero */}
      <section className="home-hero-shell relative overflow-hidden">
        <div className={`${container} relative z-10 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-white/75 px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-forest shadow-sm">
              <span className="h-2 w-2 rounded-full bg-aqua shadow-[0_0_0_4px_rgba(41,182,176,0.13)]" aria-hidden="true" />
              Win Auto Group <span className="text-ink-soft">·</span> Newmarket, Ontario
            </p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl font-serif text-[48px] leading-[0.98] tracking-[-0.035em] text-forest sm:text-[66px] xl:text-[78px]">
              Your next drive <span className="relative whitespace-nowrap text-coral">starts here<span className="accent-line absolute -bottom-1 left-0 h-1 w-full rounded-full sm:-bottom-2 sm:h-1.5" /></span>.
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
              Explore used cars, trucks, and SUVs from Win Auto Group. Compare the listed details, then confirm price and availability directly with the dealership.
            </motion.p>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-8 flex flex-wrap gap-3">
              <Link to="/inventory" className={btn.primary}>
                Browse inventory <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/about?topic=visit#contact" className={btn.secondary}>Plan a visit</Link>
            </motion.div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-forest/10 pt-5 text-[13px] font-medium text-ink-soft">
              <span className="inline-flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-full bg-aqua-soft text-aqua">✓</span> Cars, trucks & SUVs</span>
              <span className="inline-flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-full bg-sun-soft text-forest">CA$</span> Local Canadian pricing</span>
            </div>
          </div>
          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97, x: 18 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-7">
            <div className="hero-orbit absolute -right-2 top-8 z-10 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:block lg:-right-5 lg:top-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">Find your match</p>
              <p className="mt-1 font-serif text-xl text-forest">23 vehicles to explore</p>
              <div className="mt-2 flex gap-1" aria-hidden="true">
                <span className="h-1.5 w-7 rounded-full bg-aqua" /><span className="h-1.5 w-5 rounded-full bg-sun" /><span className="h-1.5 w-3 rounded-full bg-coral" />
              </div>
            </div>
            <div className="hero-image-frame relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border-[7px] border-white/80 bg-forest shadow-lift sm:rounded-[2.25rem] sm:border-[10px]">
              <VehiclePhoto photo={editorialPhotos.hero} priority sizes="(min-width: 1024px) 58vw, 100vw" widths={[640, 1000, 1400, 1900]} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-forest/10" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">At Win Auto Group</p>
                  <p className="mt-1 font-serif text-2xl sm:text-3xl">The road is yours.</p>
                </div>
                <a href={dealership.inventoryUrl} target="_blank" rel="noreferrer" aria-label="Browse official inventory" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sun text-forest transition-transform hover:scale-110">
                  <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
            <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 px-1">
              <span className="text-xs text-ink-soft">Vehicle photo from Win Auto Group’s inventory.</span>
              <PhotoCredit photo={editorialPhotos.hero} />
            </figcaption>
          </motion.figure>
        </div>
        <div className="mt-8 lg:mt-10">
          <HeroSearch />
        </div>
        </div>
      </section>

      {/* Featured */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-soft/35 to-ivory py-16 sm:py-20 lg:py-24" aria-labelledby="featured-title">
        <div className={`${container} relative`}>
        <Reveal className="flex flex-col gap-4 border-b border-forest/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.17em] text-aqua">Selected from the inventory</p>
            <h2 id="featured-title" className="font-serif text-[38px] leading-tight tracking-[-0.025em] text-forest sm:text-[48px]">Find the one that fits.</h2>
            <p className="mt-2 max-w-xl text-[15px] text-ink-soft">
              Listings copied from the dealership website. Prices and availability can change; confirm on the official listing.
            </p>
          </div>
          <a href={dealership.inventoryUrl} target="_blank" rel="noreferrer" className={`${textLink} animated-underline shrink-0 text-[15px]`}>See all vehicles <ArrowRightIcon className="ml-1 inline h-4 w-4" aria-hidden="true" /></a>
        </Reveal>
        <ul className="mt-9 grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((v, i) =>
          <li key={v.id}>
              <VehicleCard vehicle={v} priority={i < 3} />
            </li>
          )}
        </ul>
        </div>
      </section>

      {/* Browse by need */}
      <section className={`${container} pb-20 pt-12 lg:pb-24`} aria-labelledby="needs-title">
        <div className="grid gap-8 rounded-[1.75rem] border border-aqua/15 bg-gradient-to-br from-aqua-soft/55 via-white to-sun-soft/55 p-6 pt-8 shadow-card sm:p-9 lg:grid-cols-12 lg:p-10">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-coral">A simpler search</p>
            <h2 id="needs-title" className="mt-2 font-serif text-[36px] leading-tight text-forest sm:text-[40px]">Shop by what you need</h2>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">Each shortcut opens the inventory with that filter already set.</p>
          </div>
          <ul className="lg:col-span-8">
            {needs.map((n, i) =>
            <motion.li
              key={n.label}
              initial={reduceMotion ? false : { opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Link to={n.href} className="group flex items-center gap-4 border-b border-forest/10 py-4 sm:gap-6">
                  <div className="aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-xl bg-line/40 shadow-sm sm:w-32">
                    <VehiclePhoto photo={n.match[0].photos[0]} sizes="128px" widths={[240, 400]} className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-[28px] leading-none sm:text-[34px]">{n.label}</p>
                    <p className="mt-1.5 text-sm text-ink-soft">{n.note}</p>
                  </div>
                  <span className="hidden shrink-0 text-[15px] tnum sm:block">{n.match.length} vehicles</span>
                  <ArrowRightIcon className="h-5 w-5 shrink-0 text-forest transition-transform duration-150 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </motion.li>
            )}
            {budgetLinks.length > 0 &&
            <li className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6">
                <p className="w-32 shrink-0 font-serif text-[28px] leading-none sm:text-[34px]">Budget</p>
                <ul className="flex flex-wrap gap-2">
                  {budgetLinks.map((b) =>
                <li key={b.amount}>
                      <Link to={buildInventoryHref({ maxPrice: b.amount, sort: 'price-asc' })} className={btn.small}>
                        Under {formatCurrency(b.amount)} <span className="text-ink-soft tnum">· {b.count}</span>
                      </Link>
                    </li>
                )}
                </ul>
              </li>
            }
          </ul>
        </div>
      </section>

      {/* Photographic feature + process */}
      <section className="on-dark overflow-hidden bg-gradient-to-br from-forest-deep via-forest to-[#0E6175] text-ivory" aria-labelledby="details-title">
        <div className={`${container} pt-10 sm:pt-14`}>
          <motion.figure
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-6xl">
          <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-aqua/35 via-sky/25 to-coral/35 opacity-70 blur-xl sm:-inset-3" />
          <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/25 bg-forest shadow-[0_28px_80px_-32px_rgba(0,0,0,0.65)] sm:aspect-[21/9] sm:rounded-[1.75rem]">
            <VehiclePhoto
              photo={editorialPhotos.feature}
              sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 5rem), calc(100vw - 2rem)"
              widths={[640, 960, 1280, 1600]}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/75 via-transparent to-forest-deep/10" />
            <div className="hero-orbit absolute left-4 top-4 rounded-full border border-white/25 bg-forest-deep/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-[11px]">
              Featured from our inventory
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-7">
              <p className="font-serif text-xl text-white drop-shadow sm:text-3xl">
                {editorialPhotos.feature.alt.replace(' listed by Win Auto Group', '')}
              </p>
              <span className="mb-0.5 h-1.5 w-12 shrink-0 rounded-full bg-gradient-to-r from-aqua via-sky to-coral sm:w-16" aria-hidden="true" />
            </div>
          </div>
          <figcaption className="mt-3 px-1">
            <PhotoCredit photo={editorialPhotos.feature} tone="dark" prefix="Vehicle photo" />
          </figcaption>
          </motion.figure>
        </div>
        <div className={`${container} grid gap-12 py-14 lg:grid-cols-12 lg:py-20`}>
          <Reveal className="lg:col-span-5">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-sun">Shop with confidence</p>
            <h2 id="details-title" className="font-serif text-[38px] leading-[1.08] tracking-[-0.01em] sm:text-[48px]">See the details before you make the trip.</h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="text-[17px] leading-relaxed text-ivory/85">
              Each listing shows the price, mileage, and the specifications we have. If something isn’t listed, ask. Request more photos or the vehicle history report, and confirm the car is still here before you drive over.
            </p>
            <ol className="mt-10 space-y-0">
              {[
              { t: 'Shortlist', d: 'Save cars on this device and compare up to three side by side.' },
              { t: 'Ask', d: 'Send a question about a specific car, or call sales directly.' },
              { t: 'Visit', d: 'Call the dealership to confirm its current hours and arrange your visit.' }].
              map((s, i) =>
              <motion.li
                key={s.t}
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-ivory/20 py-5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 font-serif text-xl leading-none text-sun tnum">{i + 1}</span>
                  <div>
                    <p className="text-[17px] font-semibold">{s.t}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ivory/75">{s.d}</p>
                  </div>
              </motion.li>
              )}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Sell or trade */}
      <section className="bg-gradient-to-r from-coral-soft/50 via-ivory to-sun-soft/50 py-16 sm:py-20 lg:py-24" aria-labelledby="trade-title">
        <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
          <Reveal>
          <figure className="relative">
            <div className="overflow-hidden rounded-[1.5rem] border-[7px] border-white bg-line/40 shadow-lift sm:rounded-[2rem] sm:border-[9px]">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <VehiclePhoto photo={editorialPhotos.trade} sizes="(min-width: 1024px) 48vw, 100vw" className="h-full w-full object-cover" />
              </div>
            </div>
            <figcaption className="mt-2"><PhotoCredit photo={editorialPhotos.trade} prefix="Vehicle photo" /></figcaption>
          </figure>
          </Reveal>
          <Reveal delay={0.08}>
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.17em] text-coral">Make your move</p>
            <h2 id="trade-title" className="font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-forest sm:text-[48px]">Ready for what’s next?</h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-ink-soft">
              Tell us the year, make, model, mileage, and general condition. The dealership reviews what you send and follows up about next steps. Any offer depends on seeing the car in person.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft">You can sell outright or put the value toward a car here.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/sell-or-trade" className={btn.primary}>Start an appraisal request</Link>
              <a href={dealership.phoneHref} className={btn.secondary}>Call {dealership.phoneDisplay}</a>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <FinancingTeaser />

      {/* Visit */}
      <section className={`${container} py-16 sm:py-20 lg:py-24`} aria-labelledby="visit-title">
        <div className="grid gap-8 rounded-[1.75rem] border border-sky/20 bg-gradient-to-br from-sky-soft/70 via-white to-aqua-soft/60 p-6 shadow-card sm:p-9 lg:grid-cols-12 lg:gap-10 lg:p-11">
          <Reveal className="lg:col-span-5">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.17em] text-aqua">Visit the showroom</p>
            <h2 id="visit-title" className="font-serif text-[38px] leading-tight text-forest sm:text-[44px]">Come see it in person.</h2>
            <p className="mt-5 flex items-start gap-2 text-[17px]">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
              {addressLine}
            </p>
            <a href={dealership.phoneHref} className="mt-3 flex items-center gap-2 text-[22px] font-semibold tnum hover:underline">
              <PhoneIcon className="h-5 w-5 text-forest" aria-hidden="true" /> {dealership.phoneDisplay}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about?topic=visit#contact" className={btn.primary}>Request a visit</Link>
              <a href={dealership.directionsUrl} target="_blank" rel="noreferrer" className={btn.secondary}>Get directions</a>
            </div>
          </Reveal>
          <Reveal className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur sm:p-7 lg:col-span-6 lg:col-start-7" delay={0.1}>
            <h3 className="font-serif text-2xl text-forest">Hours</h3>
            <div className="mt-2"><HoursList /></div>
            <p className="mt-6 text-sm text-ink-soft">
              Want to hear from other customers?{' '}
              <a href={dealership.reviewsUrl} target="_blank" rel="noreferrer" className={textLink}>Read reviews online</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>);

}

function FinancingTeaser() {
  const [price, setPrice] = useState(35000);
  const down = Math.round(price * 0.1 / 100) * 100;
  const { monthlyPayment } = estimatePayment({ price, downPayment: down, tradeEquity: 0, apr: ILLUSTRATIVE_APR, termMonths: 60 });

  return (
    <section className="border-y border-aqua/15 bg-gradient-to-br from-sun-soft/70 via-white to-sky-soft/70" aria-labelledby="finance-title">
      <div className={`${container} grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:py-24`}>
        <Reveal className="lg:col-span-5">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.17em] text-coral">Plan your budget</p>
          <h2 id="finance-title" className="font-serif text-[38px] leading-tight text-forest sm:text-[44px]">Work out the numbers.</h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink-soft">
            Try a price, down payment, and term to see a rough monthly figure. When you’re ready, send an inquiry and talk through the financing options available to you.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/financing#calculator" className={btn.primary}>Open the calculator</Link>
            <Link to="/financing#inquiry" className={btn.secondary}>Ask about financing</Link>
          </div>
        </Reveal>
        <Reveal className="rounded-2xl border border-white/80 bg-white/85 p-5 shadow-lift backdrop-blur sm:p-7 lg:col-span-6 lg:col-start-7" delay={0.1}>
          <label htmlFor="teaser-price" className="flex items-baseline justify-between text-sm font-medium">
            <span>Vehicle price</span>
            <span className="text-[17px] font-semibold tnum">{formatCurrency(price)}</span>
          </label>
          <input
            id="teaser-price"
            type="range"
            min={15000}
            max={80000}
            step={500}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3 h-2 w-full cursor-pointer accent-forest" />
          
          <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-5" aria-live="polite">
            <div>
              <p className="text-sm text-ink-soft">Estimated payment</p>
              <p className="font-serif text-[48px] leading-none tnum">{formatCurrency(monthlyPayment)}<span className="font-sans text-base text-ink-soft">/mo</span></p>
            </div>
            <p className="max-w-[14rem] text-right text-[13px] leading-snug text-ink-soft">
              10% down, 60 months, {ILLUSTRATIVE_APR}% example APR. Excludes taxes and fees. Not an offer.
            </p>
          </div>
        </Reveal>
      </div>
    </section>);

}