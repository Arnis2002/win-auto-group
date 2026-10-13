import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import type { Vehicle } from '../../types/vehicle';
import { VehiclePhoto } from '../VehiclePhoto';
import { SaveButton } from './SaveButton';
import { CompareToggle } from './CompareToggle';
import { formatKilometres, formatPrice, orUnknown, vehicleName } from '../../utils/format';

interface VehicleCardProps {
  vehicle: Vehicle;
  sizes?: string;
  priority?: boolean;
  showCompare?: boolean;
}

export function VehicleCard({ vehicle, sizes = '(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw', priority = false, showCompare = true }: VehicleCardProps) {
  const reduceMotion = useReducedMotion();
  const href = `/inventory/${vehicle.id}`;
  const hasDisclosure = vehicle.disclosures.length > 0;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="vehicle-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-forest/10 bg-white p-2.5 sm:p-3">
      <div className="vehicle-card-image relative aspect-[4/3] overflow-hidden rounded-lg bg-line/40">
        <VehiclePhoto
          photo={vehicle.photos[0]}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/35 to-transparent" />
        
        <div className="absolute right-2.5 top-2.5">
          <SaveButton vehicle={vehicle} />
        </div>
        <div className="absolute bottom-2.5 left-2.5 flex flex-wrap gap-1.5">
          {hasDisclosure && <span className="rounded-sm bg-clay px-2 py-1 text-[11px] font-medium text-ivory">Disclosure</span>}
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <h3 className="text-[17px] font-semibold leading-snug">
          <Link to={href} className="before:absolute before:inset-0 before:content-[''] focus-visible:outline-none">
            {vehicleName(vehicle)}
          </Link>
        </h3>
        <p className="mt-0.5 line-clamp-1 text-[15px] text-ink-soft">{vehicle.trim ?? 'Win Auto Group listing'}</p>

        <div className="mt-3 flex items-baseline justify-between gap-3">
          <p className="text-[22px] font-semibold tracking-[-0.01em] text-forest tnum">{formatPrice(vehicle.price)}</p>
          <p className="rounded-full bg-sky-soft px-2.5 py-1 text-[13px] font-medium text-forest tnum">{formatKilometres(vehicle.mileage)}</p>
        </div>

        <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-forest/10 pt-3 text-[13px]">
          <div>
            <dt className="text-ink-soft">Body</dt>
            <dd className="mt-0.5">{vehicle.bodyStyle}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Drive</dt>
            <dd className="mt-0.5">{orUnknown(vehicle.drivetrain, '—')}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Fuel</dt>
            <dd className="mt-0.5">{vehicle.fuelType}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between pt-3">
          {showCompare ? <CompareToggle vehicle={vehicle} /> : <span />}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-forest" aria-hidden="true">
            Details <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.article>);

}