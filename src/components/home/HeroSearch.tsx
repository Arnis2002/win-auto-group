import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';
import { vehicles } from '../../data/vehicles';
import { applyFilters, buildInventoryHref, defaultFilters, priceSteps, uniqueSorted } from '../../utils/inventoryFilters';
import { formatCurrency } from '../../utils/format';
import { inputClass } from '../forms/Field';

export function HeroSearch() {
  const navigate = useNavigate();
  const [make, setMake] = useState('');
  const [body, setBody] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const makes = useMemo(() => uniqueSorted(vehicles.map((v) => v.make)), []);
  const bodies = useMemo(() => uniqueSorted(vehicles.map((v) => v.bodyStyle)), []);
  const minPrice = Math.min(...vehicles.map((v) => v.price ?? Infinity));

  const query = {
    makes: make ? [make] : [],
    bodies: body ? [body] : [],
    maxPrice: maxPrice ? Number(maxPrice) : null
  };
  const matches = applyFilters(vehicles, { ...defaultFilters, ...query }).length;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(buildInventoryHref(query));
  };

  const selectCls = `${inputClass} h-12 border-line-strong pr-8`;

  return (
    <form onSubmit={submit} role="search" aria-label="Search inventory" className="search-panel rounded-2xl border border-white/80 bg-white/90 p-4 shadow-lift backdrop-blur sm:p-5 lg:p-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
        <div>
          <label htmlFor="hero-make" className="mb-1.5 block text-sm font-medium">Make</label>
          <select id="hero-make" value={make} onChange={(e) => setMake(e.target.value)} className={selectCls}>
            <option value="">Any make</option>
            {makes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="hero-body" className="mb-1.5 block text-sm font-medium">Body style</label>
          <select id="hero-body" value={body} onChange={(e) => setBody(e.target.value)} className={selectCls}>
            <option value="">Any body style</option>
            {bodies.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="hero-price" className="mb-1.5 block text-sm font-medium">Maximum price</label>
          <select id="hero-price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className={selectCls}>
            <option value="">No maximum</option>
            {priceSteps.filter((p) => p >= minPrice).map((p) => <option key={p} value={p}>{formatCurrency(p)}</option>)}
          </select>
        </div>
        <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-forest px-6 text-[15px] font-semibold text-ivory shadow-md shadow-forest/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-lg">
          <SearchIcon className="h-4 w-4" aria-hidden="true" />
          Search inventory
        </button>
      </div>
      <p className="mt-3 text-[13px] text-ink-soft tnum" aria-live="polite">
        {matches === 0 ? 'No listings match. Try a wider price or another make.' : `${matches} ${matches === 1 ? 'vehicle' : 'vehicles'} match these filters`}
      </p>
    </form>);

}